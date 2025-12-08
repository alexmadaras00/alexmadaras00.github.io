import React from 'react';
import alexVideo from '../assets/Alex.mp4';
import {Link} from "react-router-dom";

function About() {
    return (
        <div className="md:p-0 bg-lisbon shadow-sm w-screen overflow-hidden-x mx-0 px-0">
            <h1 className="text-center font-bold font-mova text-3xl text-customGreen-200 mb-8">
                ABOUT ME
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-base text-[#69896E] m-2">
                {/* INTRO */}
                <div className="bg-customGreen-200 rounded-lg shadow-md p-4 m-4">
                    <h2 className="text-center font-bold font-mova text-2xl text-[#69896E] mb-2">INTRO</h2>
                    <p>
                        From developing web apps to tour guiding, I thrive at the intersection of innovation and code.
                        Hi! I’m Alex, a passionate <span className="font-bold">Technical Data Analyst</span> who loves owning and facilitating meaningful,
                        user-centered end-to-end software products 💻✨.
                    </p>
                </div>

                {/* MOTIVATION */}
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="text-center font-bold font-mova text-2xl text-[#69896E] mb-2">MOTIVATION</h2>
                    <p>
                        I’m driven by curiosity and a desire to solve real-world problems 🌍 using modern technologies 🚀.
                        My goal is to create tools that connect 🤝 and empower people’s lives 💡, facilitating the communication between the
                        business stakeholders and technical teams🛠️. I love owning product's vision from start to the end of its lifecycle,
                        negotiating features, facilitating meetings and constantly bringing change and new ideas💡.
                    </p>
                </div>

                {/* QUALITIES */}
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md m-4">
                    <h2 className="text-center font-bold font-mova text-2xl text-[#69896E] mb-2">QUALITIES</h2>
                    <p>
                        I’m an ambitious, creative and collaborative individual, interested in turning ideas into innovative software projects.
                        More exactly, I see myself being the bridge between stakeholder requirements and technical implementations. I'm equipped with
                        strong communication skills, and soft skills, completed by technical skillset, gathering
                        experience in React⚛️, Java ☕, Spring Boot 🌱, HTML/CSS 🎨, JavaScript ⚡, Python🐍, SQL⛁ and Kotlin 🧩.
                    </p>
                </div>

                {/* HOBBIES */}
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md">
                    <h2 className="text-center font-bold font-mova text-2xl text-[#69896E] mb-2">HOBBIES</h2>
                    <p >
                        Outside of tech, I’m co-building an MVP for a travel project🧳 with friends, and running a history-focused
                        Instagram channel— <a href="https://www.instagram.com/pocketwikipedia/" className="font-bold font-mova underline">PocketPedia 📜 </a>, where I simplify complex historical topics into short, engaging reels 🎥.
                        I am a certified Tour Guide in my hometown - Timisoara, where I am currently running and managing my own tour on the <a href="https://www.guruwalk.com/walks/64229-timisoara-essentials-tour-with-alex-discover-the-city" className="font-bold font-mova underline">GuruWalk</a> platform. I also love learning languages 🗣️ and exploring cultures 🌏.
                        I also love foreign languages, currently learning Italian🇮🇹, already possessing a Dutch 🇳🇱 A1 certificate!
                    </p>
                </div>

                {/* VIDEO */}
                <div className="bg-customGreen-200 rounded-lg shadow-md overflow-hidden">
                    <video
                        src={alexVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full object-cover rounded-md"
                    />
                </div>

                {/* GOALS */}
                <div className="bg-customGreen-200 rounded-lg p-4 shadow-md m-4">
                    <h2 className="text-center font-bold font-mova text-2xl text-[#69896E] mb-2">GOALS</h2>
                    <p>
                        I’m actively looking for Technical Data Analyst using my Python and SQL skills, 👨‍💻 where I can grow 🌱 and contribute to impactful projects 💪.
                        Let’s connect! If you have exciting projects, I’d love to collaborate.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-customGreen-200 rounded-lg p-6 shadow-md col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center text-center m-4">
                    <h2 className="font-bold font-mova text-2xl text-[#69896E] mb-2">Want to dive deeper?</h2>
                    <p className="text-[#69896E] mb-4">
                        Read about my full journey, values, and how I became who I am.
                    </p>
                    <Link to="/about/who-am-i">
                    <button className="bg-[#69896E] text-white font-bold py-2 px-4 rounded hover:bg-[#506b52] transition duration-200">
                        Read More / My Story →
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;
