import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import contactHandler from './api/contact.js'

function contactApiPlugin() {
  return {
    name: 'contact-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              // Load .env variables into process.env for dev server
              const env = loadEnv('development', process.cwd(), '');
              process.env.RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY || '';
              process.env.CONTACT_RECEIVER_EMAIL = env.CONTACT_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL || 'info@schoolpilot.online';
              process.env.RESEND_FROM_EMAIL = env.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL || 'SchoolPilot Website <onboarding@resend.dev>';

              const mockRes = {
                statusCode: 200,
                headers: {},
                setHeader(name, val) {
                  this.headers[name] = val;
                },
                status(code) {
                  this.statusCode = code;
                  return this;
                },
                json(data) {
                  res.statusCode = this.statusCode;
                  res.setHeader('Content-Type', 'application/json');
                  for (const [k, v] of Object.entries(this.headers)) {
                    res.setHeader(k, v);
                  }
                  res.end(JSON.stringify(data));
                }
              };

              await contactHandler({ method: req.method, body }, mockRes);
            } catch (err) {
              console.error('Dev API Error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message || 'Internal Server Error' }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    contactApiPlugin()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        disclaimer: resolve(__dirname, 'disclaimer.html'),
        terms: resolve(__dirname, 'terms.html'),
      }
    }
  }
})

