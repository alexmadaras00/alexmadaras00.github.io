import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {github, pineapple, pineappleHover} from '../assets';
import {projects} from '../constants';
import {fadeIn, textVariant, staggerContainer} from '../utils/motion';
import ProjectCard from "./ProjectCard.jsx";


export default function Projects() {
    return (
        <div className="flex flex-col justify-start mr-10 ml-10">
            <h1 className="font-mova capitalize text-center text-3xl mb-8">PROJECTS</h1>
            <div className="grid grid-cols-1 gap-4 items-stretch p-5">
                {projects.map((project, index) => (
                    <div className="flex justify-start h-90" key={index}>
                        <ProjectCard project={project}/>
                    </div>
                ))}
            </div>
        </div>

    );
}

