'use client';
import { navItems } from '@/constants'
import { useScroll } from '@/hooks/use-scroll';
import { useActiveSection } from '@/hooks/use-active-section';
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const scrolled = useScroll(50);
  const activeSection = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`fixed top-0 flex w-full justify-center z-20 ${
      scrolled ? 'border-b border-gray-800 backdrop-blur-2xl' : 'bg-white/0'
    }`}>
      <div className='mx-5 flex h-16 w-full max-w-6xl justify-between items-center'>
        <h1 className='font-extrabold text-2xl md:text-3xl text-secondary uppercase'>P{"</>"}N</h1>
        <nav className='hidden md:flex gap-6'>
          {navItems.map((item, idx) => {
            const sectionName = item.link.replace('#', '');
            const isActive = activeSection === sectionName;

            return (
              <Link
                key={idx}
                href={item.link}
                className={`relative transition-all duration-300 ${
                  isActive ? 'text-secondary font-semibold' : 'text-white hover:text-secondary'
                } uppercase font-semibold group`}
              >
                <span className='text-secondary'>{item.id}. </span>{item.name}
                <span
                  className={`absolute mt-4 left-0 bottom-0 h-[2px] rounded-full bg-secondary transition-transform duration-300 origin-left
                    scale-x-0 group-hover:scale-x-100
                    w-full`}
                />
              </Link>
            )
          })}
        </nav>

        <a href='#contact' className='hidden md:flex bg-secondary items-center justify-center rounded-md'>
          <span className='text-primary px-3 py-3 uppercase text-sm font-bold'>Hire Me</span>
        </a>

        <button
          onClick={toggleMobileMenu}
          className='md:hidden text-white hover:text-secondary transition-colors'
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg md:hidden border-b border-gray-800'>
          <nav className='flex flex-col items-center py-6 gap-6'>
            {navItems.map((item, idx) => {
              const sectionName = item.link.replace('#', '');
              const isActive = activeSection === sectionName;

              return (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative transition-all duration-300 ${
                    isActive ? 'text-gray-300 font-semibold' : 'text-white hover:text-secondary'
                  } uppercase font-semibold text-lg`}
                >
                  <span className='text-secondary'>{item.id}. </span>{item.name}
                  {isActive && (
                    <span className='absolute -bottom-1 left-0 w-full h-[2px] bg-secondary rounded-full' />
                  )}
                </Link>
              )
            })}
            <div className='bg-secondary flex items-center justify-center rounded-md mt-2'>
              <span className='text-primary px-6 py-3 uppercase text-sm font-bold'>Hire Me</span>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export default Navbar