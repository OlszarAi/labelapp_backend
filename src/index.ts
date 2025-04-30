import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma';

// Initialize environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Export prisma client for use in other files
export const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Debug endpoint for testing connection
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'LabelApp backend is running',
    timestamp: new Date().toISOString()
  });
});

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