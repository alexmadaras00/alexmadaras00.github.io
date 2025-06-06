import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import React from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { send } from '../assets';

export default function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_alex_madaras',
                'template_contact_alex',
                {
                    from_name: form.name,
                    to_name: 'YourName',
                    from_email: form.email,
                    to_email: 'youremail@gmail.com',
                    message: form.message,
                },
                'BbUWB8K3K17FfA_l2'
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you! I will get back to you as soon as possible.');
                    setForm({ name: '', email: '', message: '' });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center px-4 py-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-jet p-8 rounded-2xl w-full max-w-[700px] shadow-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-10 flex flex-col gap-6"
                >

                    <label className="flex flex-col">
                        <span className="text-timberWolf font-semibold text-2xl mb-2">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-eerieBlack py-3 px-4 text-2xl placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-timberWolf font-semibold text-2xl mb-2">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-eerieBlack py-3 px-4 text-2xl placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-timberWolf  text-2xl font-semibold mb-2">Your Message</span>
                        <textarea
                            rows="6"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className="bg-eerieBlack py-3 px-4 placeholder:text-taupe text-2xl text-timberWolf rounded-lg outline-none border-none font-medium resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="live-demo flex justify-center gap-3 items-center text-[16px] sm:text-[18px] text-timberWolf font-bold font-beckman py-3 sm:py-4 rounded-[10px] bg-blueChill hover:bg-battleGray hover:text-eerieBlack transition duration-200 ease-in-out"
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}
                    >
                        {loading ? 'Sending...' : 'Send'}
                        <img
                            src={send}
                            alt="send"
                            className="w-[22px] h-[22px] object-contain"
                        />
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
