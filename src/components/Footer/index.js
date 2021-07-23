import React from 'react';
import githubIcon from '../../assets/icons/GitHub-Mark-Light-32px.png';
import linkedIcon from '../../assets/icons/linked-in.png';
import stackIcon from '../../assets/icons/stack-icon.png';

function Footer() {
    return (
        <footer className="flex-row center">
            <a href="https://github.com/akman47" target="_blank" className="m-8"><img src={githubIcon} alt="" /></a>
            <a href="https://linkedin.com/in/angela-man-b8533a6b/" target="_blank" className="m-8"><img src={linkedIcon} style={{ width: "32px", height: "32px"}} alt="" /></a>
            <a href="https://stackoverflow.com/users/15310820/akman47?tab=profile" target="_blank" className="m-8"><img src={stackIcon} style={{ width: "32px", height: "32px"}} alt="" /></a>
        </footer>
    )
}

export default Footer;