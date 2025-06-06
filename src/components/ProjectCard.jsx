import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto rounded-2xl border border-transparent hover:border-customGreen-10 transition-all duration-500 bg-[#00363a] overflow-hidden">
            {/* Image */}
            <img
                className="w-full md:w-1/3 h-auto object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                src={project.image}
                alt={project.alt}
            />

            {/* Text Content */}
            <div className="flex flex-col justify-between p-4 md:p-6 w-full">
                <h1 className="text-white font-mova text-2xl mb-2">{project.name}</h1>
                <p className="text-white text-base md:text-lg">{project.description}</p>

                {/* Button */}
                <div className="mt-4 md:mt-6">
                    <Link to={`/projects/${project.id}`}>
                        <button className="bg-blueChill rounded-2xl h-12 w-full text-lg font-mova text-white">
                            Check it out!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
