import React from 'react';
import Nav from '../Nav';

function Header() {
    return(
        <header className="flex-row space-between">
            <h1>Angela Man</h1>
            <Nav></Nav>
        </header>
    )
}

export default Header;