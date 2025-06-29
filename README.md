# 🎭 Joke Generator Backend

A robust **REST API backend** for the Joke Generator application built with modern technologies.

## 🚀 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **SQLite** - Lightweight database
- **CORS** - Cross-origin resource sharing

## ✨ Features

- 🎯 **RESTful API** with clean endpoints
- 📊 **SQLite database** with pre-seeded jokes
- 🔒 **TypeScript** for enhanced development experience
- 🌐 **CORS enabled** for frontend integration
- 🚀 **Hot reload** development server
- 📱 **Scalable architecture** with controllers and routes

---

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

Check your installation:
```bash
node --version
npm --version
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd joke-generator-backend
```

### 2️⃣ Install Dependencies
```bash
# Install production dependencies
npm install express cors sqlite3 sqlite

# Install development dependencies
npm install --save-dev typescript ts-node nodemon @types/node @types/express @types/cors
```

### 3️⃣ Configure TypeScript
Create or update `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 4️⃣ Set Up Package Scripts
Ensure your `package.json` includes:
```json
{
  "scripts": {
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "seed": "ts-node src/utils/seedJokes.ts"
  }
}
```

### 5️⃣ Seed the Database
```bash
npm run seed
```
✅ **Expected output:**
```
Seeding completed.
```

### 6️⃣ Start Development Server
```bash
npm run dev
```
✅ **Expected output:**
```
🚀 Server running on http://localhost:8000
📊 Database connected successfully
```

---

## 🔗 API Endpoints

### Get Random Joke
```http
GET /api/joke/random
```

**Response:**
```json
{
  "id": 1,
  "setup": "Why don't scientists trust atoms?",
  "punchline": "Because they make up everything!"
}
```

### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-20T10:30:00.000Z"
}
```

---

## 📁 Project Structure

```
joke-generator-backend/
├── src/
│   ├── controllers/
│   │   └── jokesController.ts    # Business logic
│   ├── routes/
│   │   └── jokes.ts              # API routes
│   ├── utils/
│   │   ├── jokes.json            # Seed data
│   │   └── seedJokes.ts          # Database seeding
│   ├── db.ts                     # Database configuration
│   └── server.ts                 # Application entry point
├── dist/                         # Compiled JavaScript (auto-generated)
├── jokes.db                      # SQLite database (auto-generated)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Testing the API

### Using Browser
Navigate to: `http://localhost:8000/api/joke/random`

### Using cURL
```bash
curl http://localhost:8000/api/joke/random
```

### Using Postman
1. Create a new GET request
2. Set URL to: `http://localhost:8000/api/joke/random`
3. Send the request

---

## 🔧 Troubleshooting

### Common Issues

**❌ Port 8000 already in use**
```bash
# Kill process using port 8000
npx kill-port 8000
# Or use different port
PORT=3001 npm run dev
```

**❌ Database not found**
```bash
# Re-seed the database
npm run seed
```

**❌ TypeScript compilation errors**
```bash
# Clean build
rm -rf dist node_modules
npm install
npm run build
```

**❌ CORS issues**
Ensure your frontend is running on the expected port and CORS is properly configured.

---

**Happy coding! 🎉**
