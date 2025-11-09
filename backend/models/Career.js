import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  skills: [String],
  category: String,
  resources: [{ title: String, link: String }]
}, { timestamps: true });

export default mongoose.model('Career', careerSchema);
