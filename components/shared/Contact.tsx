"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Form, Input,message } from 'antd';

const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {

    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);

    const onFinish = async (values: ContactFormValues) => {
        setLoading(true);
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const data = await res.json();
            if (data.success) {
                message.success("Message sent successfully!");
                form.resetFields();
            } else {
                message.error("Failed to send message. Try again.");
            }
        } catch (error) {
            console.error(error);
            message.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };


    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'nzaberamikepeter@gmail.com'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            value: '+250789935658'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Location',
            value: 'Kigali, Rwanda'
        }
    ];


    return (
        <div id='contact' className='min-h-screen text-white px-4 py-20 md:py-32'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-16'>
                    <div className='relative inline-block w-full text-center'>
                        <h1 className=' absolute uppercase text-5xl md:text-9xl text-white/10 font-bold left-1/2 -translate-x-1/2 -translate-y-4' >Contact</h1>
                        <h1 className='uppercas text-2xl md:text-4xl font-bold'>Let&apos;s Connect</h1>

                        <div className='relative w-32 mx-auto rounded-xl overflow-hidden bg-emerald-500/30 mt-1 md:mt-5 h-2'>
                            <motion.div
                                className='absolute top-0 w-8 h-2 bg-emerald-500 rounded-full'
                                animate={{ x: ["-100%", "400%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='space-y-8'
                    >
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
                        </div>

                        <div className='space-y-6'>
                            {contactInfo.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className='flex items-start p-4 rounded-xl gap-4 group bg-white/10'
                                >
                                    <div className='p-3 bg-emerald-500/20 rounded-lg text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300'>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className='font-semibold mb-1'>{item.title}</h3>
                                        <p className='text-white/70'>{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg'

                    >
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <Form.Item
                                    name="name"
                                    label={<span className="text-white font-medium">Name</span>}
                                    rules={[{ required: true, message: "Please enter your name" }]}
                                >
                                    <Input
                                        placeholder="Your name"
                                        size="large"
                                        className="bg-primary/10!  border-white/20! text-white! placeholder-white/40! focus:border-emerald-500! hover:border-emerald-400! rounded-lg"
                                    />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label={<span className="text-white font-medium">Email</span>}
                                    rules={[
                                        { required: true, message: "Please enter your email" },
                                        { type: "email", message: "Please enter a valid email" },
                                    ]}
                                >
                                    <Input
                                        placeholder="you@example.com"
                                        size="large"
                                        className="bg-transparent!  border-white/20! text-white! placeholder-white/40! focus:border-emerald-500! hover:border-emerald-400! rounded-lg"
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="subject"
                                label={<span className="text-white font-medium">Subject</span>}
                                rules={[{ required: true, message: "Please enter a subject" }]}
                            >
                                <Input
                                    placeholder="How can I help you?"
                                    size="large"
                                    className="bg-transparent!  border-white/20! text-white! placeholder-white/40! focus:border-emerald-500! hover:border-emerald-400! rounded-lg"
                                />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label={<span className="text-white font-medium">Message</span>}
                                rules={[{ required: true, message: "Please enter your message" }]}
                            >
                                <TextArea
                                    rows={6}
                                    placeholder="Your message..."
                                    className="bg-transparent! border-white/20! text-white! placeholder-white/40! focus:border-emerald-500! hover:border-emerald-400! rounded-lg"
                                />
                            </Form.Item>

                            <Form.Item>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 border-0 font-semibold text-base rounded-lg text-white transition-all duration-300"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </motion.div>

                            </Form.Item>

                        </Form>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Contact