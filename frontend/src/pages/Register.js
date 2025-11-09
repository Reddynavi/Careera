import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/api/users/register', { name, email, password });
      alert('Registered. Please login.');
      navigate('/login');
    }catch(err){
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Create account</h2>
      <form onSubmit={submit} className="flex flex-col">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="border p-2 mb-3" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-3" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-3" />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
