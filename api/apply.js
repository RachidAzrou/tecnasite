// Serverless functie voor Vercel sollicitatieformulier
import { MailService } from '@sendgrid/mail';

// Initialize SendGrid
if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is required for email functionality");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function handler(req, res) {
  // Alleen POST requests accepteren
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Haal data uit het request
    const { name, email, phone, position, experience, message, resumeFileName } = req.body;

    // Valideer de invoer
    if (!name || !email || !position || !message) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: 'Required fields: name, email, position, message' 
      });
    }

    // Verwerking van sollicitatieformulier
    try {
      const emailSent = await sendEmail({
        to: "info@tecnarit.com",
        from: "info@tecnarit.com", // Dit moet een geverifieerd e-mailadres zijn in uw SendGrid account
        replyTo: email, // Antwoorden gaan naar de persoon die het formulier heeft ingevuld
        subject: `Nieuwe sollicitatie voor ${position}`,
        html: `
          <h2>Nieuwe sollicitatie via tecnarit.com</h2>
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefoon:</strong> ${phone || 'Niet opgegeven'}</p>
          <p><strong>Solliciteert voor:</strong> ${position}</p>
          <p><strong>Ervaring:</strong> ${experience || 'Niet opgegeven'}</p>
          <p><strong>Motivatie/bericht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ${resumeFileName ? `<p><strong>CV bestandsnaam:</strong> ${resumeFileName}</p>` : ''}
        `,
        text: `
          Nieuwe sollicitatie via tecnarit.com
          
          Naam: ${name}
          E-mail: ${email}
          Telefoon: ${phone || 'Niet opgegeven'}
          Solliciteert voor: ${position}
          Ervaring: ${experience || 'Niet opgegeven'}
          
          Motivatie/bericht:
          ${message}
          
          ${resumeFileName ? `CV bestandsnaam: ${resumeFileName}` : ''}
        `
      });
      
      return res.status(200).json({
        message: 'Thank you for your application. We will review it and get back to you soon.',
        emailSent
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      return res.status(200).json({
        message: 'Thank you for your application. We will review it and get back to you soon.',
        emailSent: false,
        emailError: 'Email sending failed'
      });
    }
  } catch (error) {
    console.error('Error processing job application:', error);
    return res.status(500).json({
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
}

async function sendEmail(params) {
  try {
    const msg = {
      to: params.to,
      from: params.from,
      replyTo: params.replyTo || params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };
    await mailService.send(msg);
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    if (error.response) {
      console.error('Error details:', error.response.body);
    }
    return false;
  }
}
