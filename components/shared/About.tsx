'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code2, Database, Globe, Cpu, Download } from 'lucide-react';

const About = () => {
    const focusAreas = [
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Backend Development",
            description: "Building robust APIs and scalable server-side solutions"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Database Design",
            description: "Architecting efficient data structures and optimization"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Full Stack Solutions",
            description: "End-to-end development from frontend to backend"
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "System Architecture",
            description: "Designing scalable and maintainable systems"
        }
    ];

    return (
        <div id='about' className='min-h-screen text-white px-4 py-20 md:py-32'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='relative inline-block'>
                        <h1 className='absolute text-5xl md:text-9xl font-bold text-white/10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-4'>
                            ABOUT
                        </h1>
                        <h2 className='text-2xl md:text-4xl font-bold'>
                            ABOUT ME
                        </h2>

                        <div className='relative w-32 mx-auto rounded-xl overflow-hidden bg-secondary/30 mt-5'>
                            <motion.div
                                className='top-0 w-2 rounded-full h-2 bg-secondary'
                                animate={{ x: ["-100%", "1000%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 items-center'>
                    <div className='relative group '>
                        <div className='relative p-2 items-cente rounded-2xl overflow-hidden bg-secondary/30'>
                            <div className='absolute inset-0 rounded-2xl overflow-hidden'>
                                <motion.div
                                    className="absolute top-0 left-0 h-4 w-10 rounded-r-full bg-linear-to-r from-transparent via-emerald-400 to-transparent"
                                    animate={{ x: ["-100%", "1000%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />

                                <motion.div
                                    className='absolute right-0 top-0 h-8 w-2 rounded-b-full bg-linear-to-b from-transparent via-emerald-400 to-transparent'
                                    animate={{ y: ["-100%", "1000%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                />

                                <motion.div
                                    className='absolute right-0 bottom-0 h-4 w-10 rounded-l-full bg-linear-to-r from-transparent via-emerald-400 to-transparent'
                                    animate={{ x: ["100%", "-1000%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                />

                                <motion.div
                                    className='absolute right-0 bottom-0 left-0 w-2 h-8 rounded-t-full bg-linear-to-t from-transparent via-emerald-400 to-transparent'
                                    animate={{ y: ["100%", "-1000%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                />
                            </div>

                            <div className='relative rounded-2xl overflow-hidden border-2 border-emerald-500/20'>
                                <Image
                                    src="/setup.png"
                                    alt="Workspace with multiple monitors showing code"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1 className='text-lg md:text-xl leading-relaxed text-gray-300 mb-8'>
                                I&apos;m a full stack developer specializing in backend solutions, with a passion for solving complex problems and delivering impactful software. My career began at an elite developer school, leading to roles in different projects where reliability and precision were paramount. Known for my proactive approach, early-start productivity, and strong communication, I bring focus and energy to each project.
                            </h1>

                            <motion.a
                                href="/Resume.pdf"
                                download="Resume.pdf"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-secondary/40 group'
                            >
                                <Download className='w-5 h-5 transition-transform duration-300 group-hover:translate-y-1' />
                                <span>DOWNLOAD Resume</span>
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className='mt-20 md:mt-32'>
                    <div className='text-center mb-12'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-2'>MY FOCUS</h2>
                        <div className='relative w-24 mx-auto rounded-xl overflow-hidden bg-secondary/30 mt-5'>
                            <motion.div
                                className='top-0 w-2 rounded-full h-2 bg-secondary'
                                animate={{ x: ["-100%", "800%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='relative group'
                            >
                                <div className='bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20'>
                                    <div className='text-secondary mb-4 transform transition-transform duration-300 group-hover:scale-110'>
                                        {area.icon}
                                    </div>
                                    <h3 className='text-xl font-semibold mb-2 text-white'>
                                        {area.title}
                                    </h3>
                                    <p className='text-gray-400 text-sm leading-relaxed'>
                                        {area.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;