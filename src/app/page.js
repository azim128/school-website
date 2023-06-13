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
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleImage() {
    const img = document.getElementById("dnmode");
    const currentSrc = img.src;
    const newSrc = currentSrc.includes("bulb.png")
      ? "./images/moon.png"
      : "./images/bulb.png";
    img.src = newSrc;
    theme==='dark'?setTheme("light"):setTheme('dark')
  }

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={`dark:bg-black ${currentTheme}`}>
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

        <div onClick={toggleImage}>
          <img id="dnmode" src="./images/bulb.png" alt="image" />
        </div>
      </div>
    </ThemeProvider>
  );
}

