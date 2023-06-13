/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-50 dark:bg-black shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="mr-4">
              <img src="ICON/Logo.png" alt="Logo" className="w-48 h-auto" />
            </a>
            <ul className="hidden sm:flex space-x-4">
              <li>
                <a href="#about" className="text-green-500 font-medium dark:text-white">ABOUT</a>
              </li>
              <li>
                <a href="#courses" className="text-green-500 font-medium dark:text-white">COURSES</a>
              </li>
              <li>
                <a href="#others" className="text-green-500 font-medium dark:text-white">OTHERS</a>
              </li>
              <li>
                <a href="#blog" className="text-green-500 font-medium dark:text-white">BLOG</a>
              </li>
            </ul>
          </div>
          <button className="hidden sm:block bg-green-50 border border-green-600 text-green-500 hover:bg-green-700 active:bg-green-800 focus:bg-green-800 focus:outline-none hover:text-white font-medium py-2 px-4 rounded">Sign In</button>
          <button
  className="block sm:hidden focus:outline-none bg-white dark:bg-slate-400 border border-gray-300 rounded p-2"
  onClick={handleMenuToggle}
>
  <svg
    className={`w-6 h-6 ${isMenuOpen ? 'transform rotate-180' : ''}`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
      fill="#10B981"
    />
  </svg>
</button>

         
        </div>
        {isMenuOpen && (
          <ul className="sm:hidden mt-2 space-y-2 bg-white dark:bg-slate-400 rounded-md py-6 px-6">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg dark:text-white">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg dark:text-white">
                COURSES
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg dark:text-white">
                OTHERS
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-100 dark:hover:bg-slate-600 rounded-lg dark:text-white">
                BLOG
              </a>
            </li>
            <li>
            <button className="w-full bg-green-50 dark:bg-slate-400 border border-green-600 hover:border-0 dark:border-white dark:text-white text-green-500 hover:bg-green-700 active:bg-green-800 focus:bg-green-800 focus:outline-none hover:text-white font-medium p-2  rounded-lg">Sign In</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
