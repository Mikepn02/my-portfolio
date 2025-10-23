"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences } from '@/constants';

const Resume = () => {


  return (
    <div id='resume' className='min-h-screen  text-white px-4 py-20 md:py-32'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <div className='relative inline-block w-full text-center'>
            <h1 className='absolute text-5xl md:text-9xl font-bold text-white/5 top-0 left-1/2 -translate-x-1/2 -translate-y-4 select-none'>
              RESUME
            </h1>
            <h1 className='uppercase text-2xl md:text-4xl font-bold relative z-10'>My Resume</h1>
            <div className='relative w-32 mx-auto rounded-xl overflow-hidden bg-emerald-500/30 mt-1 md:mt-5 h-2'>
              <motion.div 
                className='absolute top-0 w-8 h-2 bg-emerald-500 rounded-full' 
                animate={{ x: ["-100%", "400%"] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
              />
            </div>
          </div>
        </div>

        <VerticalTimeline lineColor='#10b981'>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ 
              background: 'rgba(15, 23, 42, 0.6)', 
              color: '#fff',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              boxShadow: '0 3px 10px rgba(16, 185, 129, 0.1)'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.8)' }}
            date="2022 - 2025"
            iconStyle={{ 
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
              color: '#fff',
              boxShadow: '0 0 0 4px #0a0e27, 0 0 20px rgba(16, 185, 129, 0.4)'
            }}
            icon={<GraduationCap />}
          >
            <h3 className="text-xl font-bold text-emerald-400">Software Programming and Embedded Systems</h3>
            {/* <h4 className="text-base font-semibold text-gray-300 mt-1">Diploma</h4> */}
            <p className="text-gray-400 text-sm mt-2">Rwanda Coding Academy</p>
          </VerticalTimelineElement>

          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: 'rgba(15, 23, 42, 0.6)', 
                color: '#fff',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 3px 10px rgba(16, 185, 129, 0.1)'
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.8)' }}
              date={exp.period}
              iconStyle={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                color: '#fff',
                boxShadow: '0 0 0 4px #0a0e27, 0 0 20px rgba(16, 185, 129, 0.4)'
              }}
              icon={<Briefcase />}
            >
              <h3 className="text-xl font-bold text-emerald-400">{exp.title}</h3>
              <h4 className="text-base font-semibold text-gray-300 mt-1">{exp.company}</h4>
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                    <span className="text-emerald-500 mt-1 flex-shrink-0">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Resume;