import React from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Myfooter = () => {
  return (
    <footer className="bg-white py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-handwriting">Let’s Work Together</h2>

      <p className="text-lg md:text-xl font-semibold text-black mb-2">
        If you have project or Job opportunity I would like to hear it from you
      </p>
      <p className="text-lg md:text-xl text-black mb-6">
        You can find me on <span className="font-semibold">LinkedIn</span> or E-mail me at 
        <span className="font-semibold text-orange-600 ml-1">aditikasliwal6@gmail.com</span>
      </p>

      {/* Icons */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <a href="https://www.linkedin.com/in/aditi-kasliwal-a2a602223"
                target="_blank" rel="noopener noreferrer" className="border p-2 rounded-full hover:bg-gray-100">
                 <FaLinkedinIn />
               </a>
               <a href="mailto:aditi6@gmail.com"
               className="border p-2 rounded-full hover:bg-gray-100">
                 <FaEnvelope />
               </a>
      </div>

      {/* Footer initials */}
      <div className="text-4xl font-bold font-handwriting text-black">
        <span className="text-black drop-shadow-sm">A</span>
        <span className="text-orange-600 drop-shadow-sm">K</span>
      </div>
    </footer>
  );
};

export default Myfooter;