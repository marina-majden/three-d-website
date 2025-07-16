import React from 'react';

const NavLinks = ({ onLinkClick }) => {
    return (
        <ul className="nav-ul space-y-4">
            <li className='nav-li'>
                <a href="#home" onClick={onLinkClick} className='nav-li_a'>Home</a>
            </li>
            <li className='nav-li'>
                <a href="#about" onClick={onLinkClick} className='nav-li_a'>About</a>
            </li>
            <li className='nav-li'>
                <a href="#projects" onClick={onLinkClick} className='nav-li_a'>Projects</a>
            </li>
            <li className='nav-li'>
                <a href="#contact" onClick={onLinkClick} className='nav-li_a'>Contact</a>
            </li>
        </ul>
    );
};
export default NavLinks;