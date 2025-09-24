import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('data');
    window.location.reload()
    navigate('/Login');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3 text-black font-extrabold text-3xl tracking-wider select-none">

  <span className="animate-fade-in-left">JUSTICE</span>
  <span className="relative inline-block overflow-hidden w-8 h-8">
    <span className="absolute animate-slide-in-right text-white bg-black w-full h-full flex items-center justify-center rounded-md">
      X
    </span>
  </span>
</div>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <button onClick={() => navigate('/Products')} className="hover:text-blue-600 flex items-center gap-1">
            Reports
          </button>
          <button onClick={() => navigate('/Blogs')} className="hover:text-blue-600">Blogs</button>
          <button onClick={() => navigate('/About')} className="hover:text-blue-600">About</button>
        </nav>
        
        <div className="flex items-center space-x-4">
        <button
      onClick={() => navigate("/HelpLine")}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-full shadow-lg transition duration-300 flex items-center gap-2">📞 HelpLine</button>
          <button
            onClick={handleLogOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <i className="ri-door-open-line"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
