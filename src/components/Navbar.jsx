import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

export default function Navbar() {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className="fixed top-0 left-0 z-50 w-full shadow-2xl bg-lisbon sm:opacity-95 xxs:h-[12vh]"
            style={{ backgroundColor: '#003739' }}
        >
            <div className="flex justify-between items-center w-full space-x-4 ml-4 mr-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0);
                        setToggle(false);
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="sm:w-[50px] sm:h-[50px] w-14 h-14 object-contain"
                    />
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden sm:flex gap-10 items-center m-4">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? 'text-white' : 'text-white'
                            } hover:text-taupe text-[16px] font-medium font-mova uppercase tracking-[3px] cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="sm:hidden flex items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer z-30"
                        onClick={() => setToggle(!toggle)}
                    />
                </div>

                {/* Mobile Menu Overlay */}
                {toggle && (
                    <div
                        className="absolute top-0 left-0 w-full h-screen bg-flashWhite opacity-[0.98] z-20 p-6"
                    >
                        <div className="flex justify-end">
                            <img
                                src={close}
                                alt="close"
                                className="w-[22px] h-[22px] cursor-pointer"
                                onClick={() => setToggle(false)}
                            />
                        </div>
                        <ul className="flex flex-col mt-32 gap-8 pl-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`${
                                        active === nav.title ? 'text-white' : 'text-eerieBlack'
                                    } text-[36px] font-bold font-arenq uppercase cursor-pointer`}
                                    onClick={() => {
                                        setActive(nav.title);
                                        setToggle(false);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
