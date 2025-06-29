# 🎭 Joke Generator - Full Stack

A **premium, clean Joke Generator application** with:

- A **robust REST API backend** using Node, Express, SQLite, TypeScript.
- A **modern, aesthetic React + TypeScript frontend** powered by Vite.

---

## 🚀 Tech Stack

### 🛠️ Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **SQLite** - Lightweight database
- **CORS** - Cross-origin resource sharing

### 💻 Frontend
- **React** - Frontend UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast frontend build tool
- **CSS Modules** - Styling

---

## ✨ Features

✅ REST API with random jokes  
✅ Pre-seeded SQLite database  
✅ Premium, animated frontend UI  
✅ Responsive, mobile-friendly  
✅ Smooth integration between frontend and backend  
✅ Hot reload development setup

---

## 📋 Prerequisites

Before starting, ensure you have:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

Verify:
```bash
node --version
npm --version
```

---

# 🚀 Backend Setup

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd <repo-name>
```

### 2️⃣ Install Backend Dependencies
```bash
cd backend

npm install express cors sqlite3 sqlite
npm install --save-dev typescript ts-node nodemon @types/node @types/express @types/cors
```

### 3️⃣ Configure TypeScript
Ensure your `tsconfig.json`:
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

### 4️⃣ Package Scripts
Your `package.json` should include:
```json
"scripts": {
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "seed": "ts-node src/utils/seedJokes.ts"
}
```

### 5️⃣ Seed the Database
```bash
npm run seed
```
✅ Output:
```
Seeding completed.
```

### 6️⃣ Start the Backend
```bash
npm run dev
```
✅ Expected:
```
🚀 Server running on http://localhost:8000
📊 Database connected successfully
```

---

## 🔗 API Endpoint

**Get a random joke:**
```http
GET http://localhost:8000/api/joke/random
```

---

# 💻 Frontend Setup

### 1️⃣ Install Frontend Dependencies
Open a new terminal:
```bash
cd frontend
npm install
```

### 2️⃣ Run Frontend on Port 3000
```bash
npm run dev
```
✅ Expected:
```
VITE vX.X.X ready in XXX ms

  ➜  Local: http://localhost:3000/
```

Open:
```
http://localhost:3000
```

---

## 🖼️ Preview

The frontend will:
✅ Fetch jokes from your backend (`http://localhost:8000/api/joke/random`)  
✅ Display them with a **revealable punchline**  
✅ Use smooth animations and a premium interface

---

## 📁 Project Structure

```
repo/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── db.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── jokes.db (generated)
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   └── assets/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🧪 Testing

### Test API
✅ **Browser / Postman:**
```
http://localhost:8000/api/joke/random
```

✅ **Frontend:**
```
http://localhost:3000
```

---

## 🛠️ Troubleshooting

✅ **Port 8000 already in use:**
```bash
npx kill-port 8000
```

✅ **Frontend not loading jokes:**
- Ensure backend is running and seeded.
- Ensure CORS is enabled.
- Check console logs.

✅ **Dependency issues:**
```bash
rm -rf node_modules
npm install
```

✅ **Switch ports if needed:**
```bash
PORT=3001 npm run dev
```

---

✨ **Happy coding and keep spreading laughter!**
