import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret-zmien-mnie-w-env';

// Rozszerzenie interfejsu Request, aby zawierał dane użytkownika
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      };
    }
  }
}

// Middleware do weryfikacji tokenu JWT z cookie
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Pobranie tokenu z ciasteczka
    const token = req.cookies.auth_token;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Brak tokenu autoryzacyjnego'
      });
    }

    // Weryfikacja tokenu
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string };
    
    // Sprawdzenie czy użytkownik istnieje w bazie danych
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (!user) {
      // Usunięcie nieprawidłowego ciasteczka
      res.cookie('auth_token', '', { maxAge: 0 });
      return res.status(401).json({
        success: false,
        message: 'Nieprawidłowy token - użytkownik nie istnieje'
      });
    }
    
    // Dodanie danych użytkownika do obiektu Request
    req.user = {
      id: decoded.id,
      email: decoded.email
    };
    
    next();
  } catch (error) {
    // Usunięcie nieprawidłowego ciasteczka
    res.cookie('auth_token', '', { maxAge: 0 });

    if ((error as Error).name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token wygasł, zaloguj się ponownie'
      });
    }
    
    return res.status(401).json({
      success: false,
      message: 'Nieprawidłowy token autoryzacyjny'
    });
  }
};

// Opcjonalne middleware do sprawdzenia tokenu bez blokowania dostępu
export const optionalAuthenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Pobranie tokenu z ciasteczka
    const token = req.cookies.auth_token;
    
    if (!token) {
      return next();
    }

    // Weryfikacja tokenu
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string; email: string };
    
    // Sprawdzenie czy użytkownik istnieje w bazie danych
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });
    
    if (user) {
      // Dodanie danych użytkownika do obiektu Request
      req.user = {
        id: decoded.id,
        email: decoded.email
      };
    }
    
    next();
  } catch (error) {
    // W przypadku błędu tokenu, kontynuujemy bez danych użytkownika
    next();
  }
};