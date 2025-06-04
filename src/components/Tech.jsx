import React from 'react';
import {motion} from 'framer-motion';
import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import {styles} from '../styles';
import {textVariant} from '../utils/motion';
import {skills} from '../constants';

const Tech = () => {
    return (
        <>
            <div className="p-0">
                <div className="bg-customGreen-10 rounded-2xl shadow-md rounded-lg border-spacing-1 pt-6">
                    <h2 className="flex justify-center align-bottom font-mova mb-10 text-5xl ">SKILLS</h2>
                    <div className="flex flex-wrap justify-center gap-5 mb-20 text-white contrast-200">
                        {skills.map((skill) => (
                            <motion.div whileHover={{ y: -5, opacity: 0.8 }}
                                        transition={{duration: 0.3}}
                                        className="flex flex-col mb-10"
                                        key={skill.name}
                            >
                                <motion.a
                                    whileHover={{scale: 1.1}}
                                    className="text-2xl text-white contrast-200"
                                >{skill.name}</motion.a>
                                <BallCanvas icon={skill.icon}/>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="bg-customGreen-10 rounded-2xl shadow-md rounded-lg border-spacing-1  p-6">
                <h2 className="flex justify-center align-bottom font-mova text-white contrast-200 text-5xl m-4">TECHNOLOGIES</h2>
                <div className="flex flex-wrap justify-center gap-5  mb-10">
                    {technologies.map((technology) => (
                        <motion.div whileHover={{ y: -5, opacity: 0.8 }}
                                    transition={{duration: 0.3}}
                                    className="flex flex-col mb-10"
                                    key={technology.name}
                                    >
                            <a className="text-2xl text-white contrast-200">{technology.name}</a>
                            <BallCanvas icon={technology.icon}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Tech, '');
