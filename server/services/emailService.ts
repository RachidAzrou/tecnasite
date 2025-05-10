import { MailService } from '@sendgrid/mail';
import type { MailDataRequired } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is required for email functionality");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const msg: MailDataRequired = {
      to: params.to,
      from: params.from, // Dit e-mailadres moet geverifieerd zijn in SendGrid
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    await mailService.send(msg);
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}