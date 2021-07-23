import React from 'react';

function Resume() {
    return (
        <section id="Resume">
            <h1 data-testid="resume">Resume</h1>
            <p>Download my resume</p>
            <span>Front End Proficiencies</span>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
            </ul>

            <span>Back End Proficiencies</span>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>

        </section>
    )
}

export default Resume;