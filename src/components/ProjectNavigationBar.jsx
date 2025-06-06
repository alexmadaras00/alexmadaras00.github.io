import logo from "../assets/logo/logo.png";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function ProjectNavigationBar() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const goHome = () => {
        navigate('/');
    };
    return (
        <div className="flex flex-row fixed w-full z-50 top-0 left-0 justify-between align-middle bg-lisbon shadow-md">
            <div className="flex flex-row justify-start">
                <img src={logo} alt=" logo" className=" flex justify-start w-14 h-14"/>
                <button className="mx-5 font-semibold font-mova text-xl text-customGreen-100 align-middle
                 hover:text-white-100 after:content-[''] after:block after:w-0 after:h-[3px]
             after:bg-customGreen-100 after:mx-auto after:transition-all after:duration-500
             hover:after:w-full " onClick={goHome}>HOME
                </button>
            </div>
            <a className="flex flex-row justify-end text-2xl font-semibold font-mova items-center mr-5">ALEX MADARAS</a>
        </div>
    );
}