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

// Port management utilities
import { ensurePortAvailable, getPortProcessInfo } from './utils/portManager';

// Initialize environment variables
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT || '3001', 10);
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

// Start the server with port management
async function startServer() {
  try {
    console.log(`🚀 Starting LabelApp Backend...`);
    console.log(`📍 Target port: ${port}`);
    
    // Check if port is available and kill existing process if needed
    await ensurePortAvailable(port);
    
    // Start the server
    const server = app.listen(port, () => {
      console.log(`✅ Server successfully started on port ${port}`);
      console.log(`🌐 Frontend URL: ${FRONTEND_URL}`);
      console.log(`🔗 Health check: http://localhost:${port}/api/health`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    });

    // Handle server startup errors
    server.on('error', async (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`❌ Port ${port} is still in use after cleanup attempt`);
        
        // Try to get more information about the process
        const processInfo = await getPortProcessInfo(port);
        if (processInfo) {
          console.log(`🔍 Process details: ${processInfo}`);
        }
        
        console.log(`💡 Please try running the server again or use a different port`);
        process.exit(1);
      } else {
        console.error(`❌ Server startup error:`, error);
        process.exit(1);
      }
    });

  } catch (error) {
    console.error(`❌ Failed to start server:`, error);
    process.exit(1);
  }
}

// Start the server
startServer();

// Handle application shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Disconnected from database');
  process.exit(0);
});