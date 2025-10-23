import ProjectNavigationBar from "./ProjectNavigationBar.jsx";
import alexNature from "../assets/personal/alexNature.png";
import Footer from "./Footer.jsx";
import {storyParagraphs} from "../constants/index.js";
import StoryParagraph from "./StoryParagraph.jsx";
import alexRandom from '../assets/personal/alexRandom.jpg'
import {alexGraduation, alexGuide} from "../assets/index.js";

export default function Story() {
    return (
        <div className="flex flex-col bg-eerieBlack items-center min-h-screen w-full">
            <ProjectNavigationBar/>

            <div className="flex flex-col w-full mt-24 px-4 gap-8">
                <h1 className="text-white-100 font-mova text-center font-bold text-3xl sm:text-4xl">
                    WHO AM I?
                </h1>
                <blockquote
                    className="flex text-center mx-auto  justify-center text-xl sm:text-2xl font-timesNewRoman font-bold text-white-100 mb-6">
                    "DO EVERY ACT OF YOUR LIFE AS IF IT WERE THE LAST"
                    <br/> – MARCUS AURELIUS
                </blockquote>
                <ul className="flex flex-col justify-center sm:flex-row gap-4 sm:gap-10 items-center my-5">
                    <li className="w-full max-w-xs">
                        <img
                            src={alexRandom}
                            alt="alexRandom"
                            className="w-full h-auto rounded-2xl shadow-md"
                        />
                    </li>
                    <li className="w-full max-w-xs">
                        <img
                            src={alexGraduation}
                            alt="alexGraduation"
                            className="w-full h-auto rounded-2xl shadow-md"
                        />
                    </li>
                    <li className="w-full max-w-xs">
                        <img
                            src={alexGuide}
                            alt="alexGuide"
                            className="w-full h-auto rounded-2xl shadow-md"
                        />
                    </li>
                </ul>
                <div className="flex flex-col  mt-4 px-2">


                    <div className="flex flex-col gap-6 px-2">
                        {storyParagraphs.slice(0,3).map((paragraph, index) => (
                            <StoryParagraph key={index} paragraph={paragraph}/>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 px-2">
                        {storyParagraphs.slice(3,7).map((paragraph, index) => (
                            <StoryParagraph key={index} paragraph={paragraph}/>
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
        ;
}
