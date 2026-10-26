import { validateContactInput, handleContactSubmission } from '../api/contact.js';

console.log('--- RUNNING CONTACT API & SECURITY VERIFICATION SUITE ---\n');

let testsPassed = 0;
let testsFailed = 0;

function assert(description, condition, details = '') {
  if (condition) {
    console.log(`[PASS] ${description}`);
    testsPassed++;
  } else {
    console.error(`[FAIL] ${description} ${details ? '- ' + details : ''}`);
    testsFailed++;
  }
}

// 1. Validation Test: Valid Input
const validPayload = {
  name: 'Alex Rivera',
  email: 'alex.rivera@techfirm.io',
  subject: 'Full-Stack Developer Opportunity',
  message: 'Hello Sai Ganesh, we were impressed by your ShopMate and LegalGenie projects. Are you open to discuss an engineering role?',
};
const validResult = validateContactInput(validPayload);
assert('Valid payload passes validation', validResult.isValid === true && !validResult.isSpam);
assert('Sanitized name matches trimmed input', validResult.sanitized.name === 'Alex Rivera');

// 2. Validation Test: Empty Required Fields
const emptyPayload = { name: '', email: '', subject: '', message: '' };
const emptyResult = validateContactInput(emptyPayload);
assert('Empty payload fails validation', emptyResult.isValid === false);
assert('Name error flagged', !!emptyResult.errors.name);
assert('Email error flagged', !!emptyResult.errors.email);
assert('Subject error flagged', !!emptyResult.errors.subject);
assert('Message error flagged', !!emptyResult.errors.message);

// 3. Validation Test: Invalid Email
const invalidEmailPayload = {
  name: 'Test User',
  email: 'invalid-email-address',
  subject: 'Hello',
  message: 'This is a test message with more than ten characters.',
};
const invalidEmailResult = validateContactInput(invalidEmailPayload);
assert('Invalid email address is rejected', invalidEmailResult.isValid === false && !!invalidEmailResult.errors.email);

// 4. Validation Test: Anti-Spam Honeypot Field
const spamPayload = {
  ...validPayload,
  hp_field: 'https://spam-bot-automated-link.com',
};
const spamResult = validateContactInput(spamPayload);
assert('Honeypot field flags submission as spam', spamResult.isSpam === true);

// 5. Validation Test: Email Header Injection Attempt (CRLF)
const crlfPayload = {
  name: 'Attacker\r\nBcc: victim@target.com',
  email: 'attacker@evil.com\r\nBcc: victim@target.com',
  subject: 'Inquiry\r\nContent-Type: multipart/mixed',
  message: 'Legitimate looking message body with header injection payload.',
};
const crlfResult = validateContactInput(crlfPayload);
assert('Email with CRLF is rejected', crlfResult.isValid === false && !!crlfResult.errors.email);

// 6. Test Short Message (< 10 chars)
const shortMsgPayload = {
  name: 'Alex',
  email: 'alex@company.com',
  subject: 'Job',
  message: 'Hi',
};
const shortMsgResult = validateContactInput(shortMsgPayload);
assert('Short message under 10 chars is rejected', shortMsgResult.isValid === false && !!shortMsgResult.errors.message);

// 7. Test Mock HTTP Handler: Method Not Allowed
async function testMethodNotAllowed() {
  let statusCode = null;
  let responseData = '';
  const mockReq = { method: 'GET', headers: {} };
  const mockRes = {
    setHeader: () => {},
    end: (str) => { responseData = str; },
    set statusCode(code) { statusCode = code; },
  };

  await handleContactSubmission(mockReq, mockRes, {});
  assert('GET request returns 405 Method Not Allowed', statusCode === 405);
  assert('Returns JSON error body', responseData.includes('Method Not Allowed'));
}

// 8. Test Mock HTTP Handler: Missing Key Safe Degradation
async function testMissingKeyHandling() {
  delete process.env.RESEND_API_KEY;
  let statusCode = null;
  let responseData = '';
  const mockReq = {
    method: 'POST',
    headers: { 'x-forwarded-for': '127.0.0.1' },
  };
  const mockRes = {
    setHeader: () => {},
    end: (str) => { responseData = str; },
    set statusCode(code) { statusCode = code; },
  };

  await handleContactSubmission(mockReq, mockRes, validPayload);
  const parsed = JSON.parse(responseData || '{}');
  assert('Missing RESEND_API_KEY returns 503 Service Unavailable', statusCode === 503);
  assert('Missing RESEND_API_KEY returns CONFIG_MISSING code', parsed.code === 'CONFIG_MISSING');
  assert('Returns fallback recipient email in response', parsed.recipientFallback === 'manikantha.patcha@sasi.ac.in');
}

await testMethodNotAllowed();
await testMissingKeyHandling();

console.log(`\n--- TEST SUITE COMPLETE: ${testsPassed} PASSED, ${testsFailed} FAILED ---`);
if (testsFailed > 0) {
  process.exit(1);
}
