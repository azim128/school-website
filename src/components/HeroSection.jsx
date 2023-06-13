/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-green-50 dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:w-1/2 text-center md:text-left py-12 space-y-5 mt-8 md:mt-0">
            <h5 className="text-red-500 font-medium text-sm">Are you ready to Learn?</h5>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight dark:text-white">
              Learn With fun <br /> on<span className="text-green-500"> any schedule</span>
            </h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor ex laudantium voluptatum nulla!</p>
            <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 focus:bg-green-800 focus:outline-none text-white font-medium py-2 px-4 rounded">
            Get Started</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src="./Photos/Illustration.png" alt="Illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
