import { Resend } from 'resend';

// Rate limiting in-memory storage (IP -> timestamps array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up stale rate limit entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
    if (valid.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      rateLimitMap.set(ip, valid);
    }
  }
}, 15 * 60 * 1000).unref();

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (valid.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  valid.push(now);
  rateLimitMap.set(ip, valid);
  return true;
}

// RFC 5322 simplified email regex with strict CRLF prevention
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function validateContactInput(data) {
  const errors = {};

  // Honeypot check (anti-spam)
  if (data.hp_field || data._gotcha || data.website) {
    return { isSpam: true };
  }

  // Name validation
  const rawName = typeof data.name === 'string' ? data.name.trim() : '';
  const sanitizedName = rawName.replace(/[\r\n\t]/g, ' ').slice(0, 100);
  if (!sanitizedName) {
    errors.name = 'Please provide your name';
  } else if (sanitizedName.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation & header injection prevention
  const rawEmail = typeof data.email === 'string' ? data.email.trim() : '';
  if (/[\r\n]/.test(rawEmail)) {
    errors.email = 'Invalid email format';
  } else if (!rawEmail) {
    errors.email = 'Please provide your email address';
  } else if (rawEmail.length > 254 || !EMAIL_REGEX.test(rawEmail)) {
    errors.email = 'Please provide a valid email address';
  }

  // Subject validation
  const rawSubject = typeof data.subject === 'string' ? data.subject.trim() : '';
  const sanitizedSubject = rawSubject.replace(/[\r\n\t]/g, ' ').slice(0, 150);
  if (!sanitizedSubject) {
    errors.subject = 'Please provide a subject';
  } else if (sanitizedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }

  // Message validation
  const rawMessage = typeof data.message === 'string' ? data.message.trim() : '';
  const sanitizedMessage = rawMessage.slice(0, 5000);
  if (!sanitizedMessage) {
    errors.message = 'Please provide a message';
  } else if (sanitizedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isSpam: false,
    isValid,
    errors,
    sanitized: isValid ? {
      name: sanitizedName,
      email: rawEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
    } : null,
  };
}

export async function handleContactSubmission(req, res, bodyData) {
  // CORS & Security Headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // Method check
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.statusCode = 405;
    return res.end(JSON.stringify({
      success: false,
      error: 'Method Not Allowed. Use POST.',
    }));
  }

  // Rate limiting
  const clientIp = getClientIp(req);
  if (!checkRateLimit(clientIp)) {
    res.statusCode = 429;
    return res.end(JSON.stringify({
      success: false,
      code: 'RATE_LIMITED',
      error: 'Too many submissions from this IP address. Please wait a few minutes before trying again.',
    }));
  }

  // Validate payload
  const validation = validateContactInput(bodyData || {});

  if (validation.isSpam) {
    // Silently reject spam or return 400
    res.statusCode = 400;
    return res.end(JSON.stringify({
      success: false,
      code: 'SPAM_DETECTED',
      error: 'Automated submission rejected.',
    }));
  }

  if (!validation.isValid) {
    res.statusCode = 422;
    return res.end(JSON.stringify({
      success: false,
      code: 'VALIDATION_FAILED',
      errors: validation.errors,
      error: 'Please correct the highlighted fields.',
    }));
  }

  const { name, email, subject, message } = validation.sanitized;

  // Environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'manikantha.patcha@sasi.ac.in';
  // Resend default onboarding verified address or custom verified domain
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

  if (!apiKey || apiKey === 're_placeholder_key') {
    console.warn('[Contact API] RESEND_API_KEY is not configured in server environment variables.');
    res.statusCode = 503;
    return res.end(JSON.stringify({
      success: false,
      code: 'CONFIG_MISSING',
      error: 'Email delivery provider is awaiting server RESEND_API_KEY configuration. You can reach Sai Ganesh directly at ' + toEmail,
      recipientFallback: toEmail,
    }));
  }

  try {
    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `[Portfolio Inquiry] ${subject}`,
      text: `New Inquiry from Developer Portfolio:\n\n` +
            `From: ${name} <${email}>\n` +
            `Subject: ${subject}\n` +
            `Date: ${new Date().toISOString()}\n\n` +
            `Message Content:\n${message}\n\n` +
            `---\nDelivered via Sai Ganesh Patcha Developer Portfolio`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0d10; color: #f8fafc; padding: 24px; margin: 0; }
              .card { background-color: #151921; border: 1px solid #232936; border-radius: 12px; max-width: 600px; margin: 0 auto; overflow: hidden; }
              .header { background-color: #0e1217; padding: 20px 24px; border-bottom: 1px solid #232936; }
              .header h2 { margin: 0; font-size: 18px; color: #84cc16; }
              .content { padding: 24px; }\n              .meta-row { margin-bottom: 12px; font-size: 13px; color: #94a3b8; }
              .meta-label { font-weight: 600; color: #e2e8f0; display: inline-block; width: 80px; }
              .message-box { background-color: #0b0d10; border: 1px solid #232936; border-radius: 8px; padding: 16px; margin-top: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #f1f5f9; }
              .footer { padding: 16px 24px; background-color: #0e1217; font-size: 11px; color: #64748b; border-top: 1px solid #232936; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h2>New Inquiry from Portfolio Contact Form</h2>
              </div>
              <div class="content">
                <div class="meta-row"><span class="meta-label">Name:</span> ${escapeHtml(name)}</div>
                <div class="meta-row"><span class="meta-label">Email:</span> <a href="mailto:${escapeHtml(email)}" style="color: #84cc16;">${escapeHtml(email)}</a></div>
                <div class="meta-row"><span class="meta-label">Subject:</span> ${escapeHtml(subject)}</div>
                <div class="meta-row"><span class="meta-label">Received:</span> ${new Date().toLocaleString()}</div>
                <div class="meta-label" style="margin-top: 16px;">Message:</div>
                <div class="message-box">${escapeHtml(message)}</div>
              </div>
              <div class="footer">
                Direct reply will be sent to ${escapeHtml(email)} · Delivered securely via Resend
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error('[Contact API] Resend dispatch error:', emailResponse.error.message || emailResponse.error);
      res.statusCode = 502;
      return res.end(JSON.stringify({
        success: false,
        code: 'PROVIDER_ERROR',
        error: 'Email delivery provider rejected the dispatch request. Please try direct email.',
        details: emailResponse.error.message || 'Provider error',
      }));
    }

    res.statusCode = 200;
    return res.end(JSON.stringify({
      success: true,
      message: 'Your message was successfully delivered. Sai Ganesh will respond promptly!',
      id: emailResponse.data?.id,
    }));
  } catch (error) {
    console.error('[Contact API] Unexpected error handling submission:', error?.message || error);
    res.statusCode = 500;
    return res.end(JSON.stringify({
      success: false,
      code: 'SERVER_ERROR',
      error: 'An internal error occurred while processing the contact message. Please try direct email.',
    }));
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Default export for Vercel Serverless Function
export default async function handler(req, res) {
  // Body parsing for Vercel serverless environment
  let bodyData = req.body;
  if (typeof bodyData === 'string') {
    try {
      bodyData = JSON.parse(bodyData);
    } catch {
      bodyData = {};
    }
  } else if (!bodyData && req.readable) {
    // Stream read if needed
    bodyData = await new Promise((resolve) => {
      let accum = '';
      req.on('data', chunk => { accum += chunk; });
      req.on('end', () => {
        try {
          resolve(JSON.parse(accum || '{}'));
        } catch {
          resolve({});
        }
      });
      req.on('error', () => resolve({}));
    });
  }

  // Vercel helper compatibility
  if (!res.status) {
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };
  }
  if (!res.json) {
    res.json = (data) => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      return res;
    };
  }

  return handleContactSubmission(req, res, bodyData);
}
