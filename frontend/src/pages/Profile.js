import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile(){
  const navigate = useNavigate();
  const raw = localStorage.getItem('user');
  if(!raw){
    return (
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow text-center">
        <p className="mb-4">You must login to view profile.</p>
        <button onClick={()=>navigate('/login')} className="bg-indigo-600 text-white px-4 py-2 rounded">Go to Login</button>
      </div>
    );
  }
  const user = JSON.parse(raw);
  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p className="text-sm text-gray-600 mt-3">Role: {user.role}</p>
    </div>
  );
}
