import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import logo from "../assets/logo.svg";
import logoDark from "../assets/logo-dark.svg";
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
const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("themeMode");
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [themeMode, setThemeMode] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);
        document.documentElement.dataset.theme = themeMode;
    }, [themeMode]);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const toggleTheme = () => {
        setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    // toggle logo image based on the theme mode; logo.svg is the light mode logo and logo-dark.svg is the dark mode logo

    const logoSrc = themeMode === "dark" ? logo : logo;



    return (
        <header className='fixed top-0 left-0 right-0 z-40'>
            <div className='w-full flex justify-between items-center py-2 px-6 glass-light-navbar'>
                <img src={logoSrc} alt='logo' className='w-22 h-22' />
                <label className='toggle-theme'>
                    <input
                        className='input'
                        type='checkbox'
                        aria-label='Toggle dark / light mode'
                        onClick={toggleTheme}
                        checked={themeMode === "dark"}
                        readOnly
                    />
                    <span className='slider'></span>
                </label>
                <button
                    onClick={toggleMenu}
                    className='focus:outline-none sm:hidden flex'
                    aria-label='Toggle menu'>
                    <img
                        src={isOpen ? close : menu}
                        alt='toggle'
                        className='w-10 h-10'
                    />
                </button>
                <nav className='sm:flex hidden'>
                    <NavItems />
                </nav>
            </div>

            <div
                className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"
                    }`}>
                <nav className='p-5'>
                    <NavItems />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
