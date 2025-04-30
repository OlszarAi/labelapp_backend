import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma';

// Importowanie tras
import userRoutes from './routes/userRoutes';
import projectRoutes from './routes/projectRoutes';
import labelRoutes from './routes/labelRoutes';

// Initialize environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// Export prisma client for use in other files
export const prisma = new PrismaClient();

// Konfiguracja CORS z obsługą ciasteczek
const corsOptions = {
  origin: FRONTEND_URL,
  credentials: true, // To jest kluczowe dla wysyłania ciasteczek
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // Dodanie middleware do obsługi ciasteczek
app.use(morgan('dev'));

// Debug endpoint for testing connection
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'LabelApp backend is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/labels', labelRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle application shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Disconnected from database');
  process.exit(0);
});