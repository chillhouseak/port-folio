import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 px-10 shadow-md">
      {/* Logo */}
      <div className="text-4xl font-extrabold text-black relative">
        <span className="text-orange-600 absolute left-1 top-1">AK</span>
        <span className="text-black">AK</span>
      </div>

      {/* Menu */}
      <ul className="flex gap-8 font-semibold text-lg">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/work">WORK</Link></li>
        <li><Link to= "/contact">CONTACT
        </Link></li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 text-xl">
        <a href="https://www.linkedin.com/in/aditi-kasliwal-a2a602223"
         target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:bg-gray-100">
          <FaLinkedinIn />
        </a>
        <a href="mailto:aditi6@gmail.com"
        className="border p-2 rounded-full hover:bg-gray-100">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;