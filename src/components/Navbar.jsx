import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {close, menu, logo, logotext} from '../assets';

export default function Navbar() {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className={`${styles.paddingX}  max-w-[100vw] flex flex-row w-full justify-between align-middle bg-lisbon items-center py-2 fixed 
      top-0 z-20  sm:opacity-[0.97] xxs:h-[12vh] shadow-2xl`} style={{backgroundColor: "#003739"}}>
            <div className="flex justify-between w-full ">
                <div className="flex flex-row justify-start">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive('');
                            window.scrollTo(0, 0);
                        }}>
                        <img
                            src={logo} // your logo comes here
                            alt="logo"
                            className="flex justify-start sm:w-[50px] sm:h-[50px] w-14 h-14"
                        />
                    </Link>
                </div>
                <div className="flex flex-row justify-end align-middle w-full items-center ">
                    <ul className="list-none hidden sm:flex flex-row gap-14 mx-2">
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${
                                    active === nav.title ? 'text-french' : 'text-#69896E'
                                } hover:text-taupe text-[18px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links mx-1`}
                                onClick={() => setActive(nav.title)}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* mobile */}
                <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
                    {toggle ? (
                        <div
                            className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                                toggle ? 'menu-open' : 'menu-close'
                            }`}>
                            <div className="flex justify-end">
                                <img
                                    src={close}
                                    alt="close"
                                    className="w-[22px] h-[22px] object-contain cursor-pointer"
                                    onClick={() => setToggle(!toggle)}
                                />
                            </div>
                            <ul
                                className="list-none flex flex-col -gap-[1rem]
                items-start justify-end mt-[10rem] -ml-[35px]">
                                {navLinks.map((nav) => (
                                    <li
                                        id={nav.id}
                                        key={nav.id}
                                        className={`${
                                            active === nav.title ? 'text-french' : 'text-eerieBlack'
                                        } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(nav.title);
                                        }}>
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <img
                            src={menu}
                            alt="menu"
                            className="w-[34px] h-[34px] object-contain cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        />
                    )}
                </div>
            </div>
        </nav>
    )
        ;
};

