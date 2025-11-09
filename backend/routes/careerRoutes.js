import express from 'express';
import { getCareers, addCareer } from '../controllers/careerController.js';
import { authMiddleware } from '../controllers/userController.js';
const router = express.Router();

router.get('/', getCareers);
// protect add route (only for mentors/admins in real app)
router.post('/', addCareer);


export default router;
