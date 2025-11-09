import Career from '../models/Career.js';

export const getCareers = async (req,res) => {
  try{
    const careers = await Career.find().sort({ createdAt: -1 });
    res.json(careers);
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};

export const addCareer = async (req,res) => {
  try{
    const { title, description, skills = [], category, resources = [] } = req.body;
    const career = new Career({ title, description, skills, category, resources });
    await career.save();
    res.json({ message: 'Career added', career });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
};
