import React from 'react';
import Nav from '../Nav';

function Header({currentPage, handlePageChange}) {
    return(
        <header className="flex-row space-between">
            <h1>Angela Man</h1>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
            </Nav>
        </header>
    )
}

export default Header;