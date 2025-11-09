import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white py-32 px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">Find the Right Career Path for You</h1>
          <p className="text-lg text-gray-200 mb-6">
            Explore industries, skills, and resources curated for students. Use the platform to save your interests and get personalized recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/careers')}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
            >
              Explore Careers
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-indigo-700"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="font-semibold mb-2">Personalized</h3>
          <p className="text-sm text-gray-600">Save your interests and view tailored suggestions.</p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="font-semibold mb-2">Curated Resources</h3>
          <p className="text-sm text-gray-600">Guides, courses and links handpicked by mentors.</p>
        </motion.div>
        <motion.div
          className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="font-semibold mb-2">Career Paths</h3>
          <p className="text-sm text-gray-600">Explore requirements and skills for popular careers.</p>
        </motion.div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.h2>
          <p className="mb-8 text-gray-100">
            Have questions or feedback? Fill out the form below to reach us.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 rounded-2xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </button>
            <p className="mt-4 text-sm">{status}</p>
          </form>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <Mail className="mx-auto h-8 w-8 mb-2" />
              <p>support@careera.com</p>
            </div>
            <div>
              <Phone className="mx-auto h-8 w-8 mb-2" />
              <p>+91 98765 43210</p>
            </div>
            <div>
              <MapPin className="mx-auto h-8 w-8 mb-2" />
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4">
        © {new Date().getFullYear()} CareerPortal. All rights reserved.
      </footer>
    </div>
  );
}
