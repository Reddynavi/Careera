import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export const registerUser = async (req,res) => {
  try{
    const { name,email,password } = req.body;
    if(!name||!email||!password) return res.status(400).json({ message: 'All fields required' });
    const existing = await User.findOne({ email });
    if(existing) return res.status(400).json({ message: 'User already exists' });
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed });
    await user.save();
    res.json({ message: 'Registered successfully' });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req,res) => {
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: 'Invalid credentials' });
    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};

// simple middleware to protect routes (can be reused)
export const authMiddleware = (req,res,next) => {
  const auth = req.headers.authorization;
  if(!auth) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try{
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err){
    res.status(401).json({ message: 'Invalid token' });
  }
};
