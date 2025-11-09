import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavItem = ({to, children}) => (
  <NavLink to={to}
    className={({isActive}) => 'px-3 py-2 rounded-md text-sm font-medium ' + (isActive ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-600 hover:text-white')}
  >
    {children}
  </NavLink>
);

export default function Navbar(){
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const logout = ()=> { localStorage.removeItem('token'); localStorage.removeItem('user'); navigate('/'); }

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold cursor-pointer" onClick={()=>navigate('/')}>Careera</div>
            <div className="hidden md:flex items-center space-x-1">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/careers">Careers</NavItem>
              <NavItem to="/profile">Profile</NavItem>
            </div>
          </div>
          <div>
            {token ? (
              <button onClick={logout} className="bg-white text-indigo-600 px-3 py-1 rounded-md">Logout</button>
            ) : (
              <div className="space-x-2">
                <button onClick={()=>navigate('/login')} className="bg-white text-indigo-600 px-3 py-1 rounded-md">Login</button>
                <button onClick={()=>navigate('/register')} className="border border-white px-3 py-1 rounded-md">Register</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
