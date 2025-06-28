# JWT Authentication API

A simple Express.js API that demonstrates **JSON Web Token (JWT)** authentication, including protected routes, error handling, and middleware.

---

## 🛠 Features

- User login with mock credentials
- Token generation using `jsonwebtoken`
- Protected route (dashboard) with middleware
- Custom error classes (`BadRequest`, `Unauthenticated`)
- Environment variable support using `dotenv`

---

## 📦 Technologies

- Node.js
- Express.js
- JSON Web Token (JWT)
- dotenv
- http-status-codes

---

## 🚀 Getting Started

### 1. Clone the project


git clone https://github.com/Abdslamekessou/node-jwt-authentication.git


cd node-jwt-authentication

### 2. Install dependencies

npm install

### 3. Create .env file

PORT=3000

JWT_SECRET=your_jwt_secret_key

## 4. Start the server
npm start

🧪 Test the API

POST /login
Body (JSON):
{
  "username": "yourname",
  "password": "yourpassword"
}

GET /dashboard
Add header:
Authorization: Bearer <token_from_login>

🧩 Project Structure
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

├── node_modules/

│   └── (installed packages)

│

├── public/

│   └── (static assets if any)

│

├── routes/

│   └── main.js

│

├── .env

├── .gitignore

├── app.js

├── package-lock.json

├── package.json


📚 Learn More

This project is part of a learning journey following John Smilga's Node.js Course On FreeCodeCamp.

Feel free to fork the repo, submit issues, or contribute improvements!



