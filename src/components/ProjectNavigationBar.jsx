import logo from "../assets/logo/logo.png";
import {useNavigate} from "react-router-dom";

export default function ProjectNavigationBar() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className="flex flex-row justify-between align-middle bg-lisbon shadow-md">
            <div className="flex flex-row justify-start ">
                <img src={logo} alt=" logo" className=" flex justify-start w-14 h-14"/>
                <button className="ml-5 font-semibold font-mova text-xl text-customGreen-100
                 hover:text-white-100 " onClick={goBack}>← Back
                </button>
            </div>
            <a className="flex flex-row justify-end text-2xl font-semibold font-mova items-center mr-5">ALEX MADARAS</a>
        </div>
    );
}