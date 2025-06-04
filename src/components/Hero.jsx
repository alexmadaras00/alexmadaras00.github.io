import {motion} from 'framer-motion';
import {styles} from '../styles';
import {alex, mobileVideo} from '../assets';
import React from 'react';

const Hero = () => {
    return (<>
        <section
            className="relative flex sm:flex-row flex-col w-screen h-screen mx-auto bg-hero-mobile overflow-hidden">
            <div
                className="absolute inset-0 ml-6 sm:top-[150px] top-[150px] lg:top-[150px] xl:top-[250px] w-full px-8 mx-auto flex flex-row items-start justify-center gap-3">
                <div className="flex flex-col justify-center items-center mt-5 ml-0">
                    <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden"/>
                    <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden"/>
                </div>
                <div
                    className="absolute xs:bottom-10 bottom-32 w-screen
          flex justify-center items-center">
                    <a href="#about">
                        <div
                            className="w-[35px] h-[64px] rounded-3xl border-4
            border-french border-dim flex
            justify-center items-start p-2">
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                }}
                                className="w-3 h-3 rounded-full bg-taupe mb-1"
                            />
                        </div>
                    </a>
                </div>
                <div className="absolute left-0.5 -translate-y-0">
                    <h1 className={`${styles.heroHeadText} text-#EADDFF font-poppins uppercase`}
                        style={{color: '#003739'}}>
                        Hi, I'm
                        <span
                            className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase"
                            style={{color: '#ffffff'}}>
                <br></br> Alex
              </span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>Innovation and Quality collide.</p>
                </div>

                <div className="w-full flex flex-col items-center justify-center    sm:-ml-[3rem] xxs:mt-4"></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video autoPlay loop muted className="w-full h-full object-cover" src={mobileVideo}/>
            </div>

            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(208, 188, 255, 0.2) 60%, #04363E 60%)`
                }}
            ></div>
            <div>
                <img className="absolute bottom-0 right-0.5 transform -translate-x-0 sm:h-[90vh] md:h-[70vh] xl:h-[80vh]" src={alex} alt="alex" />
            </div>


        </section>
    </>);
};

export default Hero;
