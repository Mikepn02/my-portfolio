// eslint-disable-next-line @typescript-eslint/no-unused-vars
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      setIsScrolling(true);
      
      const offset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };


  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && window.scrollY === 0) {
        scrollToAbout();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section className="relative h-screen w-full shadow-2xl">
      <div className="hero-lines" />
      <div className="relative -top-20 z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="relative inline-flex h-40 w-40 rounded-full p-1 overflow-hidden">
          <span
            className="absolute -inset-1 z-0 rounded-full animate-spin-slow
              bg-[conic-gradient(from_0deg_at_50%_50%,var(--color-secondary)_0%,var(--color-primary)_50%,var(--color-secondary)_100%)]"
          />
          <Image
            src="/passport.png"
            alt="NZABERA Mike Peter - Full Stack Developer"
            width={200}
            height={200}
            className="relative z-10 rounded-full object-cover"
            priority
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold my-5">
          Hi, I am{' '}
          <TypeAnimation
            sequence={[
              'NZABERA Mike Peter', 2000,
              'Creative Developer', 2000,
              'Fullstack Developer', 2000,
              'Blockchain Developer', 2000,
              'AI Enthusiast', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-5xl font-bold text-[var(--color-secondary)]"
          />
        </h1>
        
        <p className="text-lg max-w-xl mx-auto opacity-80 mt-4">
          As a full-stack developer, I bring a strong skillset in modern web and blockchain technologies, 
          crafting elegant, user-friendly applications that drive results.
        </p>
        
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll down indicator"
            className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300
                       focus:outline-none focus:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;