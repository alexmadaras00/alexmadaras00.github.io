import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProjectNavigationBar() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const goHome = () => {
        navigate('/');
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-lisbon shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-2">
                {/* Logo + HOME */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="logo" className="w-12 h-12" />
                    <button
                        onClick={goHome}
                        className="font-semibold font-mova text-lg sm:text-xl text-customGreen-100 hover:text-white-100
                            after:content-[''] after:block after:w-0 after:h-[2px]
                            after:bg-customGreen-100 after:mx-auto after:transition-all after:duration-500
                            hover:after:w-full"
                    >
                        HOME
                    </button>
                </div>

                {/* Name */}
                <div className="mt-2 sm:mt-0">
                    <a className="text-xl sm:text-2xl font-semibold font-mova text-center text-white">
                        ALEX MADARAS
                    </a>
                </div>
            </div>
        </div>
    );
}
