import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Należy dodać te zmienne do pliku .env i zrestartować serwer
const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret-zmien-mnie-w-env';
const EMAIL_USER = process.env.EMAIL_USER || '';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.example.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587', 10);
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const NODE_ENV = process.env.NODE_ENV || 'development';

// Konfiguracja cookie
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: NODE_ENV === 'production', // true w produkcji, false w dev
  sameSite: NODE_ENV === 'production' ? 'strict' : 'lax' as 'strict' | 'lax', // strict w produkcji
  maxAge: 24 * 60 * 60 * 1000, // 24 godziny
  path: '/',
};

// Konfiguracja transportera email
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Rejestracja użytkownika
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Sprawdzenie czy użytkownik już istnieje
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email 
          ? 'Email jest już zajęty' 
          : 'Nazwa użytkownika jest już zajęta'
      });
    }

    // Hashowanie hasła
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Tworzenie nowego użytkownika
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });

    // Generowanie tokenu JWT
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Ustawienie tokenu jako HttpOnly cookie
    res.cookie('auth_token', token, COOKIE_OPTIONS);

    // Przygotowanie odpowiedzi bez podania hasła i tokenu
    const { password: _, ...userWithoutPassword } = newUser;
    
    res.status(201).json({
      success: true,
      message: 'Użytkownik został zarejestrowany',
      data: { user: userWithoutPassword }
    });
    
  } catch (error) {
    console.error('Błąd podczas rejestracji:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas rejestracji',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};

// Logowanie użytkownika
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Znajdowanie użytkownika po email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Nieprawidłowy email lub hasło'
      });
    }

    // Sprawdzenie hasła
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Nieprawidłowy email lub hasło'
      });
    }

    // Generowanie tokenu JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Ustawienie tokenu jako HttpOnly cookie
    res.cookie('auth_token', token, COOKIE_OPTIONS);

    // Przygotowanie odpowiedzi bez podania hasła
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(200).json({
      success: true,
      message: 'Zalogowano pomyślnie',
      data: { user: userWithoutPassword }
    });
    
  } catch (error) {
    console.error('Błąd podczas logowania:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas logowania',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};

// Wylogowywanie użytkownika
export const logoutUser = async (req: Request, res: Response) => {
  try {
    // Wyczyszczenie ciasteczka z tokenem
    res.cookie('auth_token', '', { ...COOKIE_OPTIONS, maxAge: 0 });
    
    res.status(200).json({
      success: true,
      message: 'Wylogowano pomyślnie'
    });
  } catch (error) {
    console.error('Błąd podczas wylogowywania:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas wylogowywania',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};

// Sprawdzenie stanu uwierzytelnienia
export const checkAuth = async (req: Request, res: Response) => {
  try {
    // Jeśli middleware authMiddleware przepuścił żądanie, użytkownik jest uwierzytelniony
    if (req.user) {
      const user = await prisma.user.findUnique({
        where: { id: req.user.id }
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Użytkownik nie został znaleziony'
        });
      }

      // Zwracanie danych bez hasła
      const { password: _, ...userWithoutPassword } = user;
      
      return res.status(200).json({
        success: true,
        isAuthenticated: true,
        data: { user: userWithoutPassword }
      });
    }

    res.status(401).json({
      success: false,
      isAuthenticated: false,
      message: 'Nie jesteś zalogowany'
    });
    
  } catch (error) {
    console.error('Błąd podczas sprawdzania auth:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas sprawdzania autentykacji',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};

// Inicjacja procesu resetowania hasła
export const initiatePasswordReset = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Sprawdzenie czy użytkownik istnieje
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(200).json({
        success: true,
        message: 'Jeśli konto istnieje, wysłaliśmy email z instrukcjami resetowania hasła'
      });
    }

    // Generowanie unikalnego tokenu
    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1); // Token wygasa po 1 godzinie

    // Usunięcie starych tokenów dla tego użytkownika
    await prisma.resetToken.deleteMany({
      where: { userId: user.id }
    });

    // Zapisanie nowego tokenu
    await prisma.resetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt
      }
    });

    // Wysłanie emaila z linkiem do resetowania hasła
    const resetLink = `${FRONTEND_URL}/reset-password?token=${token}`;
    
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Reset hasła - LabelApp',
      html: `
        <h1>Reset hasła</h1>
        <p>Otrzymaliśmy prośbę o zresetowanie hasła do Twojego konta w aplikacji LabelApp.</p>
        <p>Kliknij w poniższy link, aby ustawić nowe hasło:</p>
        <a href="${resetLink}">Resetuj hasło</a>
        <p>Link jest ważny przez 1 godzinę.</p>
        <p>Jeśli to nie Ty prosiłeś o reset hasła, zignoruj tę wiadomość.</p>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Błąd podczas wysyłania emaila:', emailError);
      // Nawet jeśli email nie zostanie wysłany, nie informujemy o tym użytkownika
    }

    // Zawsze zwracamy taką samą odpowiedź, niezależnie czy użytkownik istnieje czy nie
    res.status(200).json({
      success: true,
      message: 'Jeśli konto istnieje, wysłaliśmy email z instrukcjami resetowania hasła'
    });
    
  } catch (error) {
    console.error('Błąd podczas inicjacji resetu hasła:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas przetwarzania żądania',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};

// Resetowanie hasła
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;

    // Sprawdzenie czy token istnieje i nie wygasł
    const resetToken = await prisma.resetToken.findUnique({
      where: { token }
    });

    if (!resetToken || resetToken.expiresAt < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Nieprawidłowy lub wygasły token resetowania hasła'
      });
    }

    // Hashowanie nowego hasła
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Aktualizacja hasła użytkownika
    await prisma.user.update({
      where: { id: resetToken.userId },
      data: { password: hashedPassword }
    });

    // Usunięcie tokenu po użyciu
    await prisma.resetToken.delete({
      where: { id: resetToken.id }
    });

    res.status(200).json({
      success: true,
      message: 'Hasło zostało pomyślnie zresetowane'
    });
    
  } catch (error) {
    console.error('Błąd podczas resetowania hasła:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas resetowania hasła',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};

// Pobieranie danych użytkownika
export const getUserProfile = async (req: Request, res: Response) => {
  try {
    // ID użytkownika jest dostępne dzięki middleware uwierzytelniania
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Nie jesteś zalogowany'
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Użytkownik nie został znaleziony'
      });
    }

    // Zwracanie danych bez hasła
    const { password: _, ...userWithoutPassword } = user;
    
    res.status(200).json({
      success: true,
      data: userWithoutPassword
    });
    
  } catch (error) {
    console.error('Błąd podczas pobierania profilu:', error);
    res.status(500).json({
      success: false,
      message: 'Wystąpił błąd podczas pobierania profilu użytkownika',
      error: NODE_ENV === 'development' ? error : undefined
    });
  }
};