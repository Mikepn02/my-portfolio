import { socialLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 flex flex-col md:flex-row w-full justify-center border-t border-gray-700 bg-primary/80 backdrop-blur-md'>
      <div className='w-full max-w-5xl  py-5 flex flex-col md:flex-row justify-between items-center px-4 gap-4 md:gap-0 '>
        <div className='flex gap-3'>
          {socialLinks.map((item, idx) => (
            <Link href={item.link} key={idx} className='relative group border border-white/10 p-2 rounded-md overflow-hidden flex items-center justify-center transition-transform duration-300'>
              <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <item.icon className='relative text-gray-400 group-hover:text-primary transition-colors duration-300' size={15} />
            </Link>
          ))}
        </div>
        <p className='text-center md:text-right text-sm text-gray-400 mt-3 md:mt-0'>
          &copy; 2025 <span className="font-bold text-gray-300">NZABERA Mike Peter</span>. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer