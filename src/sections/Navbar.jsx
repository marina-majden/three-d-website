import React from "react";
import "./Navbar.css";
import { useState } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants";

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className='nav-li'>
                    <a href={href} className='nav-li_a'>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        document.documentElement.dataset.theme =
            themeMode === "light" ? "dark" : "light";
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    <a
                        href='/'
                        className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                        Marina
                    </a>
                    <label className='toggle-theme'>
                        <input
                            className='input'
                            type='checkbox'
                            onClick={toggleTheme}
                        />
                        <span className='slider'></span>
                    </label>
                    <button
                        onClick={toggleMenu}
                        className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
                        aria-label='Toggle menu'>
                        <img
                            src={isOpen ? close : menu}
                            alt='toggle'
                            className='w-6 h-6'
                        />
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div
                className={`nav-sidebar ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
