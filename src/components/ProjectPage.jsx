import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../constants/index.js";
import { BallCanvas, Navbar } from "../index.js";
import logo from "../assets/logo/logo.png";
import { github, yt } from "../assets/index.js";
import { motion } from "framer-motion";
import ProjectNavigationBar from "./ProjectNavigationBar.jsx";
import Paragraph from "./Paragraph.jsx";
import ButtonPortfolio from "./ButtonPortfolio.jsx";
import Footer from "./Footer.jsx";
import { FaChevronDown } from "react-icons/fa"; // Scroll down icon

export default function ProjectPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    if (!project) return <div className="p-6">Error! Project not found</div>;

    const navigateGitHub = () => {
        window.open(project.repo, "_blank");
    };

    const hasVideo = project.paragraphs.some(p => p.title.includes("Watch"));

    // Scroll handler
    const handleScroll = () => {
        const element = document.getElementById("project-content");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const getGridColsClass = () => {
        const count = project.paragraphs.length;
        if (count <= 1) return "grid-cols-1";
        if (count <= 4) return "grid-cols-2";
        return "grid-cols-3";
    };

    const randomProjects = projects
        .filter(p => p.id !== project.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    return (
        <div className="flex flex-col bg-eerieBlack items-center">
            <ProjectNavigationBar />


            <div className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-3xl md:text-5xl font-extrabold font-mova text-white">{project.name.toUpperCase()}</h1>
                <p className="text-gray-400 text-sm md:text-base mt-2">{project.type}</p>
                <div className="mt-6">
                    <ButtonPortfolio onClick={navigateGitHub} src={github} text="CHECK IT ON GITHUB!" />
                </div>


                <div onClick={handleScroll} className="absolute bottom-10 cursor-pointer animate-bounce text-white">
                    <FaChevronDown size={24} />
                </div>
            </div>

            <div id="project-content" className="w-full px-4">
                <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-8">
                    <div className="md:w-1/2 w-full flex flex-col items-center">
                        <h2 className="text-xl sm:text-2xl font-semibold">ABOUT</h2>
                        <p className="mt-4 text-white text-sm">{project.description}</p>

                        <h2 className="text-xl sm:text-2xl font-semibold mt-10">TECHNOLOGIES</h2>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            {project.technologies.map(tech => (
                                <motion.div key={tech.name} whileHover={{ y: -5 }} className="flex flex-col items-center">
                                    <BallCanvas icon={tech.icon} />
                                    <span className="text-white mt-2">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <img src={project.image} alt="project" className="w-full md:w-1/2 h-auto rounded-xl" />
                </div>

                <ul className={`grid ${getGridColsClass()} gap-6 mt-10`}>
                    {project.paragraphs.filter(p => !p.title.includes('Watch')).map(paragraph => (
                        <li key={paragraph.title}><Paragraph paragraph={paragraph} /></li>
                    ))}
                </ul>

                {hasVideo && (
                    <div className="w-full mt-10 mb-20">
                        <h2 className="text-xl font-bold text-center mb-6">DEMO</h2>
                        {project.paragraphs.filter(p => p.title.includes('Watch')).map(watchVideo => {
                            const videoID = new URL(watchVideo.link).searchParams.get("v");
                            return (
                                <div key={watchVideo.title} className="aspect-video sm:aspect-w-16 sm:aspect-h-9 w-full max-w-screen-md mx-auto mb-6">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${videoID}`}
                                        title={watchVideo.title}
                                        allowFullScreen
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}

                <h1 className="flex text-2xl sm:text-xl font-bold font-mova mt-10 mx-auto items-center justify-center">OTHER PROJECTS</h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
                    {randomProjects.map((proj, index) => (
                        <li key={index} className="relative group w-full h-full rounded-xl overflow-hidden">
                            <Link to={`/projects/${proj.id}`}>
                                <img src={proj.image} className="w-full h-full object-cover rounded-xl" />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                    <p className="text-white text-lg">{proj.name}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>


            </div>
            <Footer />
        </div>
    );
}
