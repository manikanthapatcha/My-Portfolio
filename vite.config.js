import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { handleContactSubmission } from './api/contact.js';

function contactApiDevPlugin() {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Allow', 'POST');
          return res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
          if (body.length > 50000) {
            res.statusCode = 413;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Payload Too Large' }));
            req.destroy();
          }
        });

        req.on('end', async () => {
          try {
            const parsed = JSON.parse(body || '{}');
            await handleContactSubmission(req, res, parsed);
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiDevPlugin(),
    ],
  };
});
