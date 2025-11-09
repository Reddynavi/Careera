# Career Guidance Platform (Full-stack)

This is an advanced full-stack project suitable for academic submission (CIE-3).
It includes:
- React frontend with TailwindCSS and routing (Home, Careers, Profile, Login, Register)
- Node + Express backend with MongoDB
- JWT authentication for login
- Schematic diagram and project structure

## How to run

### Backend
1. cd backend
2. cp .env.example .env  # then set MONGO_URI and JWT_SECRET
3. npm install
4. npm run dev

### Frontend
1. cd frontend
2. npm install
3. (optional) install Tailwind per Tailwind docs, or run with CRA + postcss setup
4. npm start

## Notes
- The frontend expects the backend at http://localhost:5000
- Add careers by making a POST request to /api/careers with Authorization header: Bearer <token>
