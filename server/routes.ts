import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from 'zod-validation-error';
import { sendEmail } from "./services/emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate request body using Zod schema
      const data = contactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(data);
      
      // Send email using SendGrid
      try {
        const emailSent = await sendEmail({
          to: "info@tecnarit.com",
          from: "info@tecnarit.com", // BELANGRIJK: Dit moet een geverifieerd e-mailadres zijn in uw SendGrid account
          subject: `Nieuw contactformulier bericht van ${data.name}`,
          html: `
            <h2>Nieuw bericht van het contactformulier op tecnarit.com</h2>
            <p><strong>Naam:</strong> ${data.name}</p>
            <p><strong>E-mail:</strong> ${data.email}</p>
            <p><strong>Bedrijf:</strong> ${data.company || 'Niet opgegeven'}</p>
            <p><strong>Bericht:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          `,
          text: `
            Nieuw bericht van het contactformulier op tecnarit.com
            
            Naam: ${data.name}
            E-mail: ${data.email}
            Bedrijf: ${data.company || 'Niet opgegeven'}
            
            Bericht:
            ${data.message}
          `,
        });
        
        // Return success response
        return res.status(201).json({
          message: 'Thank you for your message. We will get back to you soon.',
          id: contactMessage.id,
          emailSent
        });
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        
        // We return success even if email fails, since we stored the message
        return res.status(201).json({
          message: 'Thank you for your message. We will get back to you soon.',
          id: contactMessage.id,
          emailSent: false,
          emailError: 'Email sending failed but your message was saved'
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: 'Validation failed',
          errors: validationError.message
        });
      }
      
      // Handle other errors
      console.error('Error processing contact message:', error);
      return res.status(500).json({
        message: 'An error occurred while processing your request. Please try again later.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
