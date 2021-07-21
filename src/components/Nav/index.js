import React from 'react';

function Nav() {
    return (
        <ul className="flex-row align-item-center">
            <li className="nav-list">
                <a data-testid="about" href="#about">About Me</a>
            </li>
            <li className="nav-list">
                <span>Portfolio</span>
            </li>
            <li className="nav-list">
                <span>Contact</span>
            </li>
            <li className="nav-list">
                <span>Resume</span>
            </li>
        </ul>
    );
}

export default Nav;