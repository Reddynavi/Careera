Careera – Career Guidance Platform

A full-stack **MERN (MongoDB, Express, React, Node.js)** web application that helps students explore various career options, understand required skills, and access learning resources. The platform supports different user roles such as **Student**, **Mentor**, and **Admin**.

User Authentication– Secure login & registration using JWT  
Role-Based Access- Student, Mentor, and Admin functionalities  
Career Management – Add, view, and update career options  
Skill & Category Filtering – Find careers based on skills or interests  
Learning Resources– Access links to relevant tutorials and materials  
RESTful APIs – Well-structured backend routes for scalability  
MongoDB Integration – For flexible, document-based data storage  

Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React.js, Axios, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose |
| **Authentication** | JSON Web Token (JWT) |
| **Environment** | dotenv, cors, nodemon |

Folder Structure

```
career-guidance-platform/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   │   ├── User.js
│   │   └── Career.js
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│
├── README.md
└── package.json
```

---

Installation & Setup

Clone the repository
```bash
git clone https://github.com/yourusername/Career-Guidance-Platform.git
cd Career-Guidance-Platform
```

 Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/career_portal
JWT_SECRET=your_secret_key
```

Start the backend:
```bash
npm run dev
```
 Frontend Setup
```bash
cd ../frontend
npm install
npm start

```
---
API Endpoints

User Routes
| Method | Endpoint | Description |
|--------|-----------|--------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | User login |
| GET | `/api/users/profile` | Get logged-in user details |

Career Routes
| Method | Endpoint | Description |
|--------|-----------|--------------|
| GET | `/api/careers` | Fetch all careers |
| POST | `/api/careers` | Add a new career (Admin only) |
| PUT | `/api/careers/:id` | Update a career |
| DELETE | `/api/careers/:id` | Delete a career |

---

Future Enhancements

- AI-based personalized career recommendations  
- Chat system between mentors and students  
- Dashboard analytics for admins  
- Deployment on Render / Vercel  

---

 Contributors

| Name | Role |
|------|------|
| Navya Reddy | Full Stack Developer |
| Sharitha,Kavya | Developers / Designers |

---
License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it.

---

> _“Empowering students with the right career guidance for a brighter future.”_

- The frontend expects the backend at http://localhost:5000
- Add careers by making a POST request to /api/careers with Authorization header: Bearer <token>
