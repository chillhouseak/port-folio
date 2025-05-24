import React from 'react';
import heroImage from '../assests/port.jpg'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 py-20">
      {/* Left Text Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl mb-4">
          <span role="img" aria-label="wave">👋</span> Hi, i am
        </h1>
        <h2 className="text-5xl md:text-6xl font-bold text-black relative inline-block">
          <span className="text-orange-600 absolute left-1 top-1">Aditi Kasliwal</span>
          <span className="text-black">Aditi Kasliwal</span>
        </h2>
        <p className="text-xl mt-6 text-gray-800">
          Turning ideas <span className="text-orange-600">interactive web experiences with MongoDB, Express, React, and Node.js</span>I blend development and design to deliver polished, user-friendly interfaces.


        </p>
        <button className="mt-8 bg-green-100 text-green-800 px-6 py-2 rounded-full font-medium w-fit">
          💼 Actively available for new opportunities
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center items-center">
        <img
  src={heroImage}
  alt="Aditi"
  className="rounded-xl shadow-lg w-full max-w-md h-auto object-contain"
/>
      </div>
    </div>
  );
};

export default Hero;