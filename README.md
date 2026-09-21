# Student Management System

A beginner-friendly **MERN Stack Student Management System** built with **React, Node.js, Express.js, MongoDB, and Mongoose**.

This project demonstrates the basic **CRUD (Create, Read, Update, Delete)** operations for managing student records.

## 🚀 Features

- Add a new student
- View all students
- View student data from MongoDB
- Edit existing student information
- Delete a student
- REST API built with Express.js
- MongoDB database integration using Mongoose
- React frontend with form handling and API calls
- CORS enabled for frontend-backend communication
- Environment variable support using `dotenv`

## 🛠️ Technologies Used

### Frontend
- React 19
- Vite
- JavaScript
- HTML
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- CORS
- Dotenv

## 📁 Project Structure

```text
Student Management System/
│
├── backend/
│   ├── models/
│   │   └── student.js
│   │
│   ├── routes/
│   │   └── studentRoute.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🗄️ Student Data Model

Each student contains the following fields:

| Field | Type | Required |
|---|---|---|
| Name | String | Yes |
| Roll | Number | Yes |
| Email | String | Yes |
| Department | String | Yes |
| Year | Number | Yes |

The Mongoose model is defined in:

```text
backend/models/student.js
```

## 🔌 API Endpoints

The backend runs on:

```text
http://localhost:5000
```

### Create Student

```http
POST /students
```

Example request body:

```json
{
  "name": "Subhas Mondal",
  "roll": 101,
  "email": "subhas@gmail.com",
  "department": "Information Technology",
  "year": 2
}
```

### Get All Students

```http
GET /students
```

### Get One Student

```http
GET /students/:id
```

### Update Student

```http
PUT /students/:id
```

Example request body:

```json
{
  "name": "Subhas Mondal",
  "roll": 101,
  "email": "subhas@gmail.com",
  "department": "Information Technology",
  "year": 3
}
```

### Delete Student

```http
DELETE /students/:id
```

## ⚙️ Prerequisites

Before running the project, install:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- npm (included with Node.js)

You can verify Node.js and npm:

```bash
node -v
npm -v
```

Make sure MongoDB is running locally.

## 🔧 Backend Setup

Open a terminal inside the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create or check the `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentManagement
```

Start the backend:

```bash
node server.js
```

The server will run on:

```text
http://localhost:5000
```

## 💻 Frontend Setup

Open another terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local URL in the terminal, normally:

```text
http://localhost:5173
```

Open that URL in your browser.

## 🔄 How the Application Works

```text
React Frontend
      │
      │ Fetch API
      ▼
Express.js REST API
      │
      │ Mongoose
      ▼
MongoDB Database
```

### 1. Add Student

The user fills out the student form and submits it.

React sends:

```text
POST /students
```

The Express route creates a Mongoose document and saves it to MongoDB.

### 2. Display Students

When the React application loads, it requests:

```text
GET /students
```

The backend retrieves the student records from MongoDB and sends them back as JSON.

### 3. Edit Student

The user clicks **Edit**, changes the student information, and submits the form.

React sends:

```text
PUT /students/:id
```

### 4. Delete Student

The user clicks **Delete**.

React sends:

```text
DELETE /students/:id
```

The selected student is removed from MongoDB.

## 🧪 Testing the API

You can test the backend using:

- Postman
- Thunder Client
- Browser for GET requests

Example:

```text
GET http://localhost:5000/students
```

## 📦 Important Dependencies

### Backend

```text
express
mongoose
cors
dotenv
```

### Frontend

```text
react
react-dom
vite
```

## 🔐 Environment Variables

The MongoDB connection string is stored in:

```text
backend/.env
```

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentManagement
```

Do not commit sensitive environment variables or production database credentials to GitHub.

## ⚠️ Current Project Notes

This project is intentionally kept simple for learning MERN CRUD fundamentals.

The current backend update route should return the updated student response after `findByIdAndUpdate()` so the frontend can handle the update response correctly.

The frontend also uses a hard-coded API URL:

```text
http://localhost:5000
```

For a production deployment, it is better to store the API base URL in an environment variable.

## 🎯 Learning Objectives

This project is useful for learning:

- React `useState`
- React `useEffect`
- Controlled form inputs
- Fetch API
- REST API concepts
- Express routes
- MongoDB
- Mongoose schemas and models
- CRUD operations
- CORS
- Environment variables
- Frontend-backend communication

## 🔮 Future Improvements

Possible improvements include:

- Better form validation
- Loading indicators
- Error messages in the UI
- Search students
- Filter by department/year
- Pagination
- Confirmation before deletion
- Clear form after submission
- Separate Add/Edit button states
- Responsive UI
- Better table/card design
- Authentication and admin login
- Deployment of frontend and backend
- Production MongoDB database
- API base URL through environment variables

## 👨‍💻 Author

**Subhas Mondal**

B.Tech Information Technology  
Kalyani Government Engineering College (KGEC)

---

⭐ If you are learning MERN, this project is a good starting point for understanding how a React frontend communicates with an Express/MongoDB backend.
