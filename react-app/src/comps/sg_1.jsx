import React from 'react';
import {logo} from '../assets/logo.png';
const Sg_1 = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('assets\s1_bg.png')]">
      <header className=''>
        <nav className= 'flex'>
          Metalytix
            <img 
              src={logo}
              width={45}
              height={50}
            />
        </nav>
      </header>
      <div className="container mx-auto p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="mt-2">This is a simple React website with a background image using Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default Sg_1;