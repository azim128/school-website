'use client'
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus ac dolor aliquet pharetra nec in tellus.",
    name: "John Doe",
    company: "ABC Company",
    avatar: "./testimonials/testimonials-1.jpg",
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla volutpat semper mattis.",
    name: "Jane Smith",
    company: "XYZ Inc.",
    avatar: "./testimonials/testimonials-2.jpg",
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla volutpat semper mattis.",
    name: "Robert Johnson",
    company: "123 Corp",
    avatar: "./testimonials/testimonials-4.jpg",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    const index = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };
  

  const nextSlide = () => {
    const index = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div>
        <div className="text-center">
          <h1 className="text-4xl  lg:text-5xl font-medium mb-4 leading-tight">Testimonial</h1>
        </div>
      </div>
    <div className="relative">
      <div className="py-8 md:px-16 mx-4 md:mx-0 border shadow rounded-lg dark:bg-gray-700">
        <div className="flex flex-col md:flex-row items-center mb-4 justify-center text-center space-x-6">
        <div className='mb-10 md:mb-0'>
          <img
            className="w-20 md:w-[16rem]  md:h-40 rounded-[50%] mx-auto border border-green-500"
            src={testimonials[activeIndex].avatar}
            alt="Avatar"
          />
          
            <p className="font-bold dark:text-white">{testimonials[activeIndex].name}</p>
            <p className="text-gray-600  dark:text-white">{testimonials[activeIndex].company}</p>
          </div>
          <p className="text-gray-600 text-sm md:text-xl  dark:text-white before:content-[open-quote] after:content-[close-quote]">{testimonials[activeIndex].text}</p>
        </div>
        
      </div>
      <button
        className="absolute top-1/2 -translate-y-1/2 left-[3rem] md:left-8 p-2 bg-white rounded-full shadow-lg transform -translate-x-1/2 hover:bg-gray-200 focus:outline-none"
        onClick={prevSlide}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-[3rem] md:right-8 p-2 bg-white rounded-full shadow-lg transform translate-x-1/2 hover:bg-gray-200 focus:outline-none"
        onClick={nextSlide}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.59 7.41L10 6L16 12L10 18L8.59 16.59L13.17 12L8.59 7.41Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-1 rounded-full ${
              index === activeIndex ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
  </div>
  );
};

export default TestimonialCarousel;
