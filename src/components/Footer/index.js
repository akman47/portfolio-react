import React from 'react';
import githubIcon from '../../assets/icons/GitHub-Mark-Light-64px.png';
import linkedIcon from '../../assets/icons/linked-in.png';

function Footer() {
    return (
        <footer className="flex-row center">
            <a href="https://github.com/akman47" target="_blank" className="m-8"><img src={githubIcon} alt="" /></a>
            <a href="https://linkedin.com/in/angela-man-b8533a6b/" target="_blank" className="m-8"><img src={linkedIcon} style={{ width: "64px", height: "64px"}} alt="" /></a>
        </footer>
    )
}

export default Footer;