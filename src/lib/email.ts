/**
 * Email utility for Manaforge Press
 * Same SMTP as Amp Spot Audio — differentiated by email subjects and templates
 *
 * Subject prefixes:
 * - [Manaforge Contact] — contact form submissions
 * - [Manaforge Newsletter] — newsletter confirmations
 * - Manaforge Press — password/service emails (if auth added later)
 */

import nodemailer from 'nodemailer';

let _transporter: nodemailer.Transporter | null = null;

function createTransporter(): nodemailer.Transporter {
  if (_transporter) return _transporter;

  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('SMTP credentials not configured');
  }

  _transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  return _transporter;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions): Promise<boolean> {
  try {
    const transporter = createTransporter();
    const from = process.env.EMAIL_FROM || process.env.SMTP_USER || 'Manaforge Press <noreply@manaforge.press>';

    await transporter.sendMail({ from, to, subject, html, replyTo });
    return true;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
}

/**
 * Send contact form to owner — prefixed [Manaforge Contact]
 */
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const ownerEmail = process.env.EMAIL_TO || process.env.SMTP_USER;

  return sendEmail({
    to: ownerEmail!,
    subject: `[Manaforge Contact] ${data.subject}`,
    replyTo: data.email,
    html: `
      <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; background: #1c1917; color: #d6d3d1; padding: 40px 20px;">
        <div style="text-align: center; margin-bottom: 32px; border-bottom: 2px solid #f59e0b; padding-bottom: 16px;">
          <h1 style="color: #f59e0b; font-size: 22px; margin: 0;">Manaforge Press</h1>
          <p style="color: #78716c; font-size: 12px; margin: 4px 0 0;">Contact Form Submission</p>
        </div>

        <div style="background: #292524; border-radius: 12px; padding: 24px; border: 1px solid #44403c;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #78716c; font-size: 14px; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #fafaf9; font-size: 14px;">${data.name || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #f59e0b; font-size: 14px;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Subject</td>
              <td style="padding: 8px 0; color: #fafaf9; font-size: 14px;">${data.subject}</td>
            </tr>
          </table>

          <div style="border-top: 1px solid #44403c; margin-top: 16px; padding-top: 16px;">
            <p style="color: #78716c; font-size: 12px; margin-bottom: 8px;">Message:</p>
            <p style="color: #d6d3d1; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>

        <p style="color: #57534e; font-size: 11px; text-align: center; margin-top: 16px;">
          Sent from manaforge-press-website.vercel.app
        </p>
      </div>
    `,
  });
}
