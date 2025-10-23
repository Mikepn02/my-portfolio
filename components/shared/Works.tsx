"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { projects } from '@/constants';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Works = () => {
  return (
    <div id='works' className='min-screen text-white px-4 py-20 md:py-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <div className='relative w-full text-center inline-block'>
            <h1 className='absolute text-5xl md:text-9xl font-bold text-white/10 top-0 left-1/2 -translate-x-1/2  -translate-y-4'>WORKS</h1>
            <h1 className='uppercase text-2xl md:text-4xl font-bold'>My Works</h1>
            <div className='relative w-32 mx-auto rounded-xl overflow-hidden bg-emerald-500/30 mt-1 md:mt-5 h-2'>
              <motion.div
                className='absolute top-0 w-8 h-2 bg-emerald-500 rounded-full'
                animate={{ x: ["-100%", "400%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className='group relative bg-white/10 p-4 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300'
            >
              <div className='relative h-48 overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='w-full h-full  group-hover:scale-110 transition-transform duration-500 object-contain'
                />
                <div className='absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60' />

                <div className='absolute inset-0 bg-linear-to-t from-emerald-900/90 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                   <a
                    href={item.live}
                   >
                     <ExternalLink className='w-5 h-5'/>
                   </a>

                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors'>{item.title}</h3>
                <p className='text-[#BFBECB] text-sm mb-4 '>{item.description}</p>
              </div>

              <div className='flex flex-wrap gap-2'>
                {item.tech.map((tech, idx) => (
                  <span key={idx}
                   className='px-2 py-2 bg-slate-800/50 border border-slate-700/50 rounded text-xs text-gray-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    
  )
}

export default Works