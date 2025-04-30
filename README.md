# LabelApp Backend

## Spis treści
1. [Wprowadzenie](#wprowadzenie)
2. [Architektura Systemu](#architektura-systemu)
3. [Baza Danych](#baza-danych)
   - [Model Danych](#model-danych)
   - [Migracje](#migracje)
4. [API](#api)
   - [Użytkownicy](#użytkownicy)
   - [Projekty](#projekty)
   - [Etykiety](#etykiety)
5. [Autentykacja i Bezpieczeństwo](#autentykacja-i-bezpieczeństwo)
6. [Konfiguracja](#konfiguracja)
7. [Uruchomienie](#uruchomienie)
8. [Środowisko Programistyczne](#środowisko-programistyczne)

## Wprowadzenie

LabelApp Backend to serwer RESTful API dostarczający funkcjonalności dla aplikacji LabelApp, służącej do projektowania i zarządzania etykietami. Backend został zbudowany w oparciu o Node.js, Express.js i TypeScript, z bazą danych PostgreSQL zarządzaną przez Prisma ORM. System obsługuje pełne zarządzanie użytkownikami, projektami i etykietami, oferując bezpieczną autentykację i autoryzację.

## Architektura Systemu

Backend aplikacji LabelApp jest zorganizowany zgodnie z wzorcem MVC (Model-View-Controller), gdzie:

- **Model**: Zdefiniowany za pomocą Prisma Schema w pliku `prisma/schema.prisma`
- **Controller**: Logika biznesowa zaimplementowana w kontrolerach w folderze `src/controllers`
- **Routes**: Definicje endpointów API w folderze `src/routes`
- **Middleware**: Funkcje pośredniczące, np. autentykacja, w folderze `src/middleware`

Główne komponenty systemu:

1. **Express.js Server**: Podstawa serwera HTTP, obsługująca routing, middleware i komunikację z klientem.
2. **Prisma ORM**: Warstwa dostępu do bazy danych, mapowanie obiektowo-relacyjne.
3. **Authentication**: System JWT z bezpiecznymi ciasteczkami HttpOnly.
4. **Controllers**: Implementacja logiki biznesowej dla każdego zasobu.
5. **Routes**: Definicje endpointów API.

## Baza Danych

### Model Danych

Backend korzysta z PostgreSQL jako systemu zarządzania bazą danych. Model danych zdefiniowany jest w pliku `prisma/schema.prisma` i zawiera następujące główne encje:

#### User
```prisma
model User {
  id          String       @id @default(uuid())
  username    String       @unique
  email       String       @unique
  password    String
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  projects    Project[]
  ResetToken  ResetToken[]
}
```

#### ResetToken
```prisma
model ResetToken {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  expiresAt DateTime
  createdAt DateTime @default(now())
}
```

#### Project
```prisma
model Project {
  id          String     @id @default(uuid())
  name        String
  description String?
  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  labels      Label[]
}
```

#### Label
```prisma
model Label {
  id          String   @id @default(uuid())
  name        String
  content     Json
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Migracje

Baza danych jest zarządzana poprzez migracje Prisma, co zapewnia bezpieczne wdrażanie zmian schematu. Główne migracje:

1. **20250430193629_initial_setup** - Początkowa konfiguracja bazy danych
2. **20250430211656_add_user_authentication** - Dodanie modeli do autentykacji użytkowników

Aby zastosować migracje:
```bash
npx prisma migrate dev
```

Aby wygenerować klienta Prisma:
```bash
npx prisma generate
```

## API

Backend udostępnia RESTful API z następującymi endpointami:

### Użytkownicy

| Metoda | Endpoint | Opis | Autentykacja |
|--------|----------|------|--------------|
| POST | /api/users/register | Rejestracja nowego użytkownika | Nie |
| POST | /api/users/login | Logowanie użytkownika | Nie |
| POST | /api/users/logout | Wylogowanie użytkownika | Nie |
| GET | /api/users/check-auth | Sprawdzenie stanu autentykacji | Tak |
| POST | /api/users/password-reset/initiate | Inicjacja resetowania hasła | Nie |
| POST | /api/users/password-reset/confirm | Zatwierdzenie nowego hasła | Nie |
| GET | /api/users/profile | Pobieranie profilu użytkownika | Tak |

### Projekty

| Metoda | Endpoint | Opis | Autentykacja |
|--------|----------|------|--------------|
| GET | /api/projects | Pobieranie wszystkich projektów użytkownika | Tak |
| GET | /api/projects/:id | Pobieranie szczegółów projektu | Tak |
| POST | /api/projects | Tworzenie nowego projektu | Tak |
| PUT | /api/projects/:id | Aktualizacja projektu | Tak |
| DELETE | /api/projects/:id | Usunięcie projektu | Tak |

### Etykiety

| Metoda | Endpoint | Opis | Autentykacja |
|--------|----------|------|--------------|
| GET | /api/labels | Pobieranie wszystkich etykiet | Tak |
| GET | /api/labels/:id | Pobieranie szczegółów etykiety | Tak |
| POST | /api/labels | Tworzenie nowej etykiety | Tak |
| PUT | /api/labels/:id | Aktualizacja etykiety | Tak |
| DELETE | /api/labels/:id | Usunięcie etykiety | Tak |

## Autentykacja i Bezpieczeństwo

System autentykacji oparty jest na JWT (JSON Web Token) z wykorzystaniem bezpiecznych ciasteczek HttpOnly:

1. **Tworzenie Tokenu**: Podczas logowania lub rejestracji, serwer generuje JWT zawierający ID i email użytkownika, podpisując go za pomocą tajnego klucza.

2. **Bezpieczne Przechowywanie**: Token jest przechowywany w ciasteczku HttpOnly, co uniemożliwia dostęp do niego przez JavaScript, chroniąc przed atakami XSS.

3. **Weryfikacja Tokenu**: Middleware `authMiddleware.ts` sprawdza ważność tokenu przed dostępem do chronionych zasobów.

4. **Automatyczne Wylogowanie**: Tokeny mają określony czas ważności (24 godziny).

5. **Ochrona CSRF**: Ciasteczka są konfigurowane z opcją SameSite, aby chronić przed atakami CSRF.

6. **Bezpieczne Przechowywanie Haseł**: Hasła są hashowane za pomocą bcrypt przed zapisaniem w bazie danych.

7. **Resetowanie Hasła**: System obsługuje bezpieczne resetowanie hasła poprzez wysyłanie jednorazowych tokenów na email użytkownika.

## Konfiguracja

Konfiguracja serwera odbywa się poprzez zmienne środowiskowe w pliku `.env`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/labelapp?schema=public"

# Server
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Authentication
JWT_SECRET=your_secure_jwt_secret_key

# Email config (dla resetowania hasła)
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
```

## Uruchomienie

### Wymagania wstępne
- Node.js v16+
- PostgreSQL v14+

### Instalacja

```bash
# Instalacja zależności
npm install

# Generowanie klienta Prisma
npx prisma generate

# Zastosowanie migracji
npx prisma migrate dev

# Uruchomienie serwera
npm run dev
```

### Uruchomienie z Docker

Backend można uruchomić za pomocą Dockera używając pliku `docker-compose.yaml`:

```bash
docker-compose -f backend-compose.yaml up
```

## Środowisko Programistyczne

Backend został zbudowany z użyciem następujących technologii:

- **Node.js**: Środowisko uruchomieniowe JavaScript
- **Express.js**: Framework do budowy API
- **TypeScript**: Język programowania dodający typowanie statyczne do JavaScript
- **Prisma**: ORM dla Node.js i TypeScript
- **PostgreSQL**: System zarządzania bazą danych
- **JWT**: Standard do bezpiecznego przesyłania tokenów
- **bcrypt**: Biblioteka do hashowania haseł
- **nodemailer**: Biblioteka do wysyłania emaili

Development workflow:
1. Edycja kodu TypeScript w `src/`
2. Automatyczne transpilowanie i restartowanie serwera dzięki `ts-node-dev`
3. Wykonywanie migracji w razie zmian w schemacie
4. Testowanie API z pomocą narzędzi takich jak Postman lub Insomnia
