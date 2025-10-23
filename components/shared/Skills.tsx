"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { allSkills } from '@/constants';

const Skills = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02
            }
        }
    };
    return (
        <div id='skills' className='min-h-screen text-white px-4 py-20 md:py-32'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-16'>
                    <div className='relative w-full inline-block text-center '>
                        <h1 className='absolute  text-5xl md:text-9xl font-bold text-white/10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-4'>
                            SKILLS
                        </h1>
                        <h2 className='uppercase text-2xl md:text-4xl font-bold'>My Skills</h2>

                        <div className='relative w-32 mx-auto rounded-xl overflow-hidden bg-secondary/30 mt-1 md:mt-5 '>
                            <motion.div
                                className='top-0 w-2 rounded-full h-2 bg-secondary'
                                animate={{ x: ["-100%", "1000%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}

                            />
                        </div>
                    </div>
                </div>

                <motion.div
                 className='flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto'
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true , amount: 0.2}}
                >
                    {allSkills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.1 , y: -5}}
                          className='px-4 py-2.5 md:px-5 md:py-3 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full text-sm md:text-base font-medium border-white/20 hover:border-white/40 hover:from-white/10 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl'
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills