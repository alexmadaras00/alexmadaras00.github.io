import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import React from 'react';
import emailjs from '@emailjs/browser';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {slideIn} from '../utils/motion';
import {send, sendHover} from '../assets';

export default function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({...form, [name]: value});
    };

    const [isHovered, setIsHovered] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // sign up on emailjs.com (select the gmail service and connect your account).
        //click on create a new template then click on save.
        emailjs
            .send(
                'service_alex_madaras', // paste your ServiceID here (you'll get one when your service is created).
                'template_contact_alex', // paste your TemplateID here (you'll find it under email templates).
                {
                    from_name: form.name,
                    to_name: 'YourName', // put your name here.
                    from_email: form.email,
                    to_email: 'youremail@gmail.com', //put your email here.
                    message: form.message,
                },
                'BbUWB8K3K17FfA_l2' //paste your Public Key here. You'll get it in your profile section.
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you! I will get back to you as soon as possible.');

                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert('Something went wrong. Please try again.');
                }
            );
    };

    return (
        <div
            className="-mt-50 xl:flex-row flex-col w-full h-full mx-auto
      flex gap-10 overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex bg-jet p-8 rounded-2xl w-full">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-20 flex flex-col align-middle items-center gap-6 text-2xl font-poppins mx-auto w-1/5 h-1/2">
                    <label className="flex flex-col">
                        <span className="text-timberWolf font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-eerieBlack py-4 px-40
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-timberWolf font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-eerieBlack py-4 px-40
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className="bg-eerieBlack py-4 px-40
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        className="live-demo flex justify-center sm:gap-4
            gap-3 sm:text-[20px] text-[16px] text-timberWolf
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px]
            w-[100px] h-[45px] rounded-[10px] bg-blueChill
            hover:bg-battleGray hover:text-eerieBlack
            transition duration-[0.2s] ease-in-out"
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}>
                        {loading ? 'Sending' : 'Send'}
                        <img
                            src={send}
                            alt="send"
                            className="contact-btn sm:w-[26px] sm:h-[26px]
              w-[23px] h-[23px] object-contain"
                        />
                    </button>
                </form>
            </motion.div>
        </div>
    );
};


