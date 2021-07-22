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
        <ul className="flex-row align-item-center">
            <li className={`nav-list ${aboutSelected && 'navActive'}`}>
                <a data-testid="about" href="#about" onClick={() => {
                    setAboutSelected(true)
                    setPortfolioSelected(false)
                    setContactSelected(false)
                    setResumeSelected(false)
                    }}>About Me
                </a>
            </li>
            <li className={`nav-list ${portfolioSelected && 'navActive'}`}>
                <a data-testid="portfolio" href="#portfolio" onClick={() => {
                    setAboutSelected(false)
                    setPortfolioSelected(true)
                    setContactSelected(false)
                    setResumeSelected(false)
                    }}>Portfolio
                </a>
            </li>
            <li className={`nav-list ${contactSelected && 'navActive'}`}>
                <a data-testid="contact" href="#contact" onClick={() => {
                    setAboutSelected(false)
                    setPortfolioSelected(false)
                    setContactSelected(true)
                    setResumeSelected(false)
                    }}>Contact
                </a>
            </li>
            <li className={`nav-list ${resumeSelected && 'navActive'}`}>
                <a data-testid="resume" href="#resume" onClick={() => {
                    setAboutSelected(false)
                    setPortfolioSelected(false)
                    setContactSelected(false)
                    setResumeSelected(true)
                    }}>Resume
                </a>
            </li>
        </ul>
    );
}

export default Nav;