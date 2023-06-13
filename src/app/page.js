/* eslint-disable @next/next/no-img-element */
'use client'
import { ThemeProvider, useTheme } from 'next-themes';
import BlogSection from "@/components/Blog.section";
import CardContainer, { CardContainer2 } from "@/components/CardContainer";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialCarousel from "@/components/slider";
import { useState, useEffect } from 'react';

export default function Home() {
  


  return (
    
      <div className="dark:bg-black">
        <Navbar />
        <HeroSection />
        <div id="#about" className="my-20">
          <CardContainer />
        </div>
        <div id="#courses" className="my-20">
          <CardContainer2 />
        </div>
        <div id="#others" className="my-20">
          <TestimonialCarousel />
        </div>
        <div id="#blog" className="my-20">
          <BlogSection />
        </div>
        <div className="my-20">
          <ContactForm />
        </div>
        <div>
          <Footer />
        </div>

        {/* <div onClick={toggleImage}>
          <img id="dnmode" src="./images/bulb.png" alt="image" />
        </div> */}
      </div>
   
  );
}

