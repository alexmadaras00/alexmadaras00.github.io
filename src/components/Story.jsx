import ProjectNavigationBar from "./ProjectNavigationBar.jsx";
import alexNature from "../assets/personal/alexNature.png";
import Footer from "./Footer.jsx";
import Paragraph from "./Paragraph.jsx";
import {storyParagraphs} from "../constants/index.js";
import StoryParagraph from "./StoryParagraph.jsx";
import alexRandom from '../assets/personal/alexRandom.jpg'

export default function Story() {

    return (
        <div className="flex flex-col bg-eerieBlack items-center align-middle h-full w-full min-h-screen">
            <ProjectNavigationBar/>
            <div className="relative flex flex-col h-full w-full mt-20 px-4 min-h-full">
                <h1 className="flex text-white-100 font-mova mx-auto items-center font-bold text-4xl">WHO AM I?</h1>
                <div className="flex flex-row w-full justify-center mx-20 px-4 ">
                    <ul className="flex flex-col justify-between gap-10 mt-80 mb-20">
                        <li className="w-80 h-80 mx-auto">
                            <img src={alexNature} alt="alexNature"
                                 className="flex justify-center  items-center mx-auto rounded-2xl"/>
                        </li>
                        <li className="w-80 h-80 mx-auto">
                            <img src={alexRandom} alt="alexRandom"
                                 className="flex justify-center  items-center mx-auto rounded-2xl"/>
                        </li>
                    </ul>
                    <div className="flex flex-col w-full mt-20 ">
                        <a className="flex justify-center mt-10 font-timesNewRoman text-2xl font-bold items-center">"DO
                            EVERY ACT OF YOUR LIFE
                            AS IT
                            WOULD BE THE LAST"<br/> - MARCUS AURELIUS</a>
                        <div className="flex flex-col">{
                            storyParagraphs.map((paragraph, index) => (
                                <StoryParagraph key={index} paragraph={paragraph}/>
                            ))
                        }
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}