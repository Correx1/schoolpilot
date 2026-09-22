/**
 * Serverless API Route for Contact Form Submission via Resend
 * Compatible with Vercel, Netlify, and standard Node.js environments.
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { fullName, email, phone, subject, message, _hp_website } = body;

    // 1. Silent Bot Rejection if honeypot is triggered
    if (_hp_website && _hp_website.trim() !== '') {
      return res.status(200).json({ success: true, message: 'Message received.' });
    }

    // 2. Validate required fields
    if (!fullName || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please fill in all required fields (Full Name, Email, Subject, and Message).' 
      });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('[Resend API] RESEND_API_KEY is not configured in environment variables.');
      return res.status(500).json({ 
        success: false, 
        error: 'Email service is not yet configured. Please set RESEND_API_KEY in your environment.' 
      });
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'info@schoolpilot.online';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'SchoolPilot Inquiries <onboarding@resend.dev>';
    const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'Africa/Lagos' });

    // HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { background: #0B2545; color: #ffffff; padding: 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
            .content { padding: 24px; }
            .badge { display: inline-block; padding: 4px 10px; font-size: 12px; font-weight: 600; border-radius: 6px; background: #eff6ff; color: #2563eb; margin-bottom: 16px; }
            .field-row { margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
            .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #0f172a; font-weight: 500; }
            .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>SchoolPilot Technologies</h1>
              <p style="margin: 6px 0 0 0; font-size: 14px; color: #94a3b8;">New Website Contact / Demo Request</p>
            </div>
            <div class="content">
              <span class="badge">Inquiry Details</span>
              
              <div class="field-row">
                <div class="field-label">Full Name</div>
                <div class="field-value">${fullName}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || 'Not provided'}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Subject</div>
                <div class="field-value">${subject}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Timestamp (West Africa Time)</div>
                <div class="field-value">${submittedAt}</div>
              </div>

              <div style="margin-top: 20px;">
                <div class="field-label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              Sent automatically from SchoolPilot Website Contact Form &bull; schoolpilot.online
            </div>
          </div>
        </body>
      </html>
    `;

    // Dispatch directly to Resend REST API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: email,
        subject: `[SchoolPilot Inquiry] ${subject} - from ${fullName}`,
        html: htmlContent
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('[Resend Error]', data);
      return res.status(response.status).json({ 
        success: false, 
        error: data.message || 'Failed to send message via Resend.' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email delivered successfully!',
      id: data.id 
    });

  } catch (err) {
    console.error('[Contact API Error]', err);
    return res.status(500).json({ 
      success: false, 
      error: 'An internal error occurred while processing your request.' 
    });
  }
}
