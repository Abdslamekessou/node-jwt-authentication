
# 🔐 JWT Authentication API

A production-style Express.js API demonstrating **JWT (JSON Web Token)** authentication with middleware, protected routes, and centralized error handling.

---

## ✨ Features

- ✅ User login with JWT generation
- ✅ Authorization via custom middleware
- ✅ Protected `/dashboard` route
- ✅ Custom error classes (`BadRequest`, `Unauthenticated`)
- ✅ Secure `.env` environment setup

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **jsonwebtoken**
- **dotenv**
- **http-status-codes**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Abdslamekessou/node-jwt-authentication.git
cd node-jwt-authentication
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

```env
PORT=3000
JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the Server

```bash
npm start
```

---

## 🧪 Test the API

### 🔐 POST `/login`

**Body (JSON):**
```json
{
  "username": "yourname",
  "password": "yourpassword"
}
```

### 🔒 GET `/dashboard`

**Header:**
```
Authorization: Bearer <your_token>
```

---

## 🗂️ Project Structure

```
project-root/
│
├── controllers/
│   └── main.js
│
├── db/
│   └── connect.js
│
├── errors/
│   ├── bad-request.js
│   ├── custom-error.js
│   ├── index.js
│   └── unauthenticated.js
│
├── middleware/
│   ├── auth.js
│   ├── error-handler.js
│   └── not-found.js
│
├── public/             # static assets (if any)
├── routes/
│   └── main.js
│
├── .env
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

---

## 📘 Learn More

This project is part of a learning path from **John Smilga's Node.js course** on FreeCodeCamp.

Feel free to ⭐️ the repo, fork it, and contribute to improve it!

---

n


