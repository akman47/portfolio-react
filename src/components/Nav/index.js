import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']

    return (
        <ul className="flex-row align-item-center nav-bar">
            {tabs.map(tab => (
                <li className={`nav-list ${props.currentPage === tab ? 'navActive' : 'nav-list'}`} key={tab}>
                    <Link to={`/${tab.toLowerCase()}`} onClick={() => props.handlePageChange(tab)}>
                        <span>{tab}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Nav;