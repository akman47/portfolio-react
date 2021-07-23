import React from 'react';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <ul className="flex-row align-item-center nav-bar">
            <li className={`nav-list ${aboutSelected && 'navActive'}`}>
                <span data-testid="about" onClick={() => {
                    setAboutSelected(true)
                    setPortfolioSelected(false)
                    setContactSelected(false)
                    setResumeSelected(false)
                    }}>About Me
                </span>
            </li>
            <li className={`nav-list ${portfolioSelected && 'navActive'}`}>
                <span data-testid="portfolio" onClick={() => {
                    setAboutSelected(false)
                    setPortfolioSelected(true)
                    setContactSelected(false)
                    setResumeSelected(false)
                    }}>Portfolio
                </span>
            </li>
            <li className={`nav-list ${contactSelected && 'navActive'}`}>
                <span data-testid="contact" href="#contact" onClick={() => {
                    setAboutSelected(false)
                    setPortfolioSelected(false)
                    setContactSelected(true)
                    setResumeSelected(false)
                    }}>Contact
                </span>
            </li>
            <li className={`nav-list ${resumeSelected && 'navActive'}`}>
                <span data-testid="resume" href="#resume" onClick={() => {
                    setAboutSelected(false)
                    setPortfolioSelected(false)
                    setContactSelected(false)
                    setResumeSelected(true)
                    }}>Resume
                </span>
            </li>
        </ul>
    );
}

export default Nav;