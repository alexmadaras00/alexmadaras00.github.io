import {Link, Route, Routes} from "react-router-dom";

export default function ProjectCard({project}) {
    return (
        <div
            className="flex flex-row w-full h-full mr-0.5 rounded-2xl hover:border-2 hover:border-customGreen-10 ">
            <img
                className="w-1/4 h-full rounded-xl"
                src={project.image}
                alt={project.alt}
            />
            <div className="flex flex-col justify-between p-6 w-3/4 bg-[#00363a]">
                <h1 className="text-white font-mova text-2xl">{project.name}</h1>
                <p className="text-white text-lg mt-3">{project.description}</p>
            </div>
            <div className="flex flex-col justify-start p-6 w-1/3">
                <Link to={`/projects/${project.id}`}>
                    <button
                        className="bg-blueChill rounded-2xl h-14 w-full text-xl font-mova mb-1 flex justify-center items-center">
                        Check it out!
                    </button>
                </Link>
            </div>

        </div>
    )
}