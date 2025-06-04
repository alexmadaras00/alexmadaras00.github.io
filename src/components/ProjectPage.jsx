import {Link, useNavigate, useParams} from "react-router-dom";
import {projects, skills} from "../constants/index.js";
import {BallCanvas, Navbar} from "../index.js";
import logo from "../assets/logo/logo.png";
import {github, yt} from "../assets/index.js";
import {motion} from 'framer-motion';
import ProjectNavigationBar from "./ProjectNavigationBar.jsx";
import Paragraph from "./Paragraph.jsx";
import React, {useEffect} from "react";
import tech from "./Tech.jsx";
import ButtonPortfolio from "./ButtonPortfolio.jsx";


export default function ProjectPage() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top-left
    }, []);
    const {id} = useParams();
    console.log(id);
    const project = projects.find(p => p.id === id);

    const navigateGitHub = () => {
        window.open(project.repo, "_blank");
    }
    const navigateVideoYT = (linkVideo) => {
        window.open(linkVideo, "_blank");
    }
    console.log(projects);

    if (!project) {
        return <div className="p-6">Error! Project not found</div>;
    }

    const hasVideo = project.paragraphs.filter(p => p.title.includes('Watch')).length > 0;
    const visibility = hasVideo ? 'visible' : 'invisible';
    const paragraphCount = project.paragraphs.length;

    const getGridColsClass = () => {
        if (paragraphCount <= 1) return "grid-cols-1";
        if (paragraphCount <= 4) return "grid-cols-2";
        if (paragraphCount > 4) return "grid-cols-3";
    };
    const indexes = new Set();
    const randomProjects = [];
    while (indexes.size < 4) {
        let randomIndex = Math.floor(Math.random() * projects.length);
        if (projects[randomIndex].id !== project.id) {
            indexes.add(randomIndex);
        }
    }
    for (const val of indexes) {
        randomProjects.push(projects[val]);
    }
    console.log("Random projects: " + Array.from(randomProjects));
    return (
        <div className="flex flex-col justify-col bg-eerieBlack align-items-center align-middle ">
            <ProjectNavigationBar/>
            <div className="relative flex flex-col h-full w-full justify-col sm: mt-100 md:mt-40 md:mb-40">
                <div className="flex flex-col gap-1">
                    <h1 className="flex text-4xl font-extrabold font-mova justify-center">{project.name.toUpperCase()}</h1>
                    <p className="flex text-lg font-bold text-gray-500 justify-center ">{project.type}</p>
                </div>

            </div>
            <ButtonPortfolio onClick={navigateGitHub} src={github} text="CHECK IT ON GITHUB!"/>
            <div className="flex flex-row justify-center md:mt-80 md:m-10 lg:mt-135">
                <div className="flex flex-col w-1/2 mr-5 items-center md:mt-10 lg:mt-40">
                    <div className="flex flex-col mt-10">
                        <h2 className="flex text-2xl font-mova font-semibold justify-center align-middle">ABOUT</h2>
                        <p className="flex mt-5 text-sm text-white-100 align-middle justify-center">{project.description}</p>
                        <h2 className="flex text-2xl font-mova font-semibold justify-center align-middle mt-10">TECHNOLOGIES</h2>
                        <div className="grid grid-cols-3 mx-auto justify-start text-white contrast-200 mt-10">
                            {project.technologies.map((technology) => (
                                <motion.div whileHover={{y: -5, opacity: 0.8}}
                                            transition={{duration: 0.3}}
                                            className="flex flex-col"
                                            key={technology.name}
                                >
                                    <BallCanvas icon={technology.icon}/>
                                    <motion.a
                                        whileHover={{scale: 1.1}}
                                        className="text-2xl text-white contrast-200 items-center mx-auto"
                                    >{technology.name}</motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
                <img src={project.image} alt="image" className="w-1/2 h-1/3 mt-5 rounded-2xl "/>
            </div>
            <ul className={`grid ${getGridColsClass()} px-10 md:gap-x-10`}>{
                project.paragraphs.filter(p => !p.title.includes('Watch')).map(paragraph => (
                    <li className="mx-auto" key={paragraph.title}>
                        <Paragraph paragraph={paragraph}/>
                    </li>
                ))
            }
            </ul>
            <div id="video" className={`flex flex-col items-center mb-20 ${visibility}`}>
                <h2 className="text-2xl font-bold mb-10">DEMO</h2>
                {project.paragraphs
                    .filter(p => p.title.includes('Watch'))
                    .map(watchVideo => {
                        const videoID = new URL(watchVideo.link).searchParams.get("v");
                        const embedUrl = `https://www.youtube.com/embed/${videoID}`;

                        return (
                            <div key={watchVideo.title.toString().toUpperCase()}
                                 className="w-full flex justify-center mb-10">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={embedUrl}
                                    title={watchVideo.title.toString().toUpperCase()}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        );
                    })}
                <ButtonPortfolio onClick={navigateVideoYT} src={yt} text="WATCH IT ON YOUTUBE!"/>

            </div>
            <h2 className="flex justify-center font-bold font-mova">OTHER PROJECTS</h2>
            <div className="flex flex-row gap-20 m-10">{
                randomProjects.map((randomProject, index) => (
                    <div className="relative group w-60 h-60 rounded-xl overflow-hidden" key={index}>
                            <Link to={`/projects/${randomProject.id}`}>
                            <img src={randomProject.image} className="w-full h-full rounded-xl transition-opacity duration-100"
                                 alt="image"/>
                            <div
                                className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-100">
                                <p className="text-2xl text-white font-mova mx-auto mx-2">{randomProject.name}</p>

                            </div>
                            </Link>
                    </div>
                ))
            }
            </div>
            <footer className="flex h-full bg-lisbon text-2xl p-5"><a className="mx-auto">© Alex Madaras 2025</a>
            </footer>
        </div>
    );
}