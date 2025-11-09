import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import contactRoutes from './routes/ContactRoutes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/career_portal';
mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Base route
app.get('/', (req, res) => res.send('Career Guidance API running'));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/contact', contactRoutes); // ✅ new route added here

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
