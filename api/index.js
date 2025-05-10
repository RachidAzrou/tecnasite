// Serverless functie voor Vercel

import express from 'express';
import { registerRoutes } from '../server/routes.js';

// Initialiseer Express app
const app = express();
app.use(express.json());

// Registreer API routes
registerRoutes(app).then(() => {
  console.log('API routes registered for serverless function');
}).catch(err => {
  console.error('Error registering API routes:', err);
});

export default app;