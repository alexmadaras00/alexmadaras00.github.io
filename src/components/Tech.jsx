import React from 'react';
import {motion} from 'framer-motion';
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies, skills} from '../constants';

export default function Tech() {
    return (
        <>
            <div className="p-2 sm:p-6">
                <div className="bg-customGreen-10 rounded-2xl shadow-md border-spacing-1 pt-6 px-4 sm:px-10">
                    <h2 className="flex justify-center items-end font-mova mb-10 text-3xl sm:text-5xl text-center">
                        TECHNICAL SKILLS
                    </h2>
                    <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 mb-20 text-white contrast-200">
                        {skills.map((skill) => (
                            <motion.div
                                whileHover={{y: -5, opacity: 0.8}}
                                transition={{duration: 0.3}}
                                className="flex flex-col items-center mb-8 w-24 sm:w-32"
                                key={skill.name}
                            >
                                <motion.a
                                    whileHover={{scale: 1.4}}
                                    className="text-lg sm:text-2xl text-white contrast-200 mb-2"
                                    // Disable hover scaling on mobile by adding media query in CSS if needed
                                >
                                    {skill.name}
                                </motion.a>
                                <BallCanvas icon={skill.icon} size={80 /* Pass a size prop if supported */}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-customGreen-10 rounded-2xl shadow-md border-spacing-1 p-4 sm:p-6 mx-2 sm:mx-10 mb-10">
                <h2 className="flex justify-center items-end font-mova text-white contrast-200 text-3xl sm:text-5xl m-4 text-center">
                    TECHNOLOGIES
                </h2>
                <div className="sm:flex sm:flex-wrap justify-center gap-4 sm:gap-8 mb-10">
                    {technologies.map((technology) => (
                        <motion.div
                            whileHover={{y: -5, opacity: 0.8}}
                            transition={{duration: 0.3}}
                            className="flex flex-col items-center mb-8 w-24 sm:w-32"
                            key={technology.name}
                        >
                            <a className="text-lg sm:text-2xl text-white contrast-200 mb-2">{technology.name}</a>
                            <BallCanvas icon={technology.icon} size={80}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};


