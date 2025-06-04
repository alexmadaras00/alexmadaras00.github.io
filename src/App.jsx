import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';

import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Projects,
} from './index.js';
import ProjectPage from "./components/ProjectPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div id="home" className="relative z-0 w-screen overflow-x-visible">
                            <div className="w-screen h-full">
                                <Navbar/>
                                <Hero/>
                            </div>
                            <div id="about"
                                 className="relative z-0 w-screen bg-about bg-cover bg-center min-h-screen rounded-0">
                                <About/>
                            </div>
                            <div id="tech"
                                 className="bg-lisbon bg-cover bg-center bg-no-repeat w-full overflow-x-hidden">
                                <Tech/>
                            </div>
                            <div id="projects"
                                 className="flex bg-lisbon bg-cover bg-no-repeat w-full overflow-x-hidden">
                                <Projects/>
                            </div>
                            <div
                                className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
                                <Experience/>
                            </div>
                            <div id="contact" className="relative z-0">
                                <Contact/>
                            </div>
                        </div>
                    }
                />
                <Route path="/project/:id" element={<ProjectPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
