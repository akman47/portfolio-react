import React from 'react';

function Resume() {
    return (
        <section id="Resume">
            <h1 data-testid="resume">Skills &amp; Experience</h1>
            <a href="https://drive.google.com/file/d/1ig66QVZOr92mOo0-YWz1qse_Eh5UgeaH/view?usp=sharing" target="_blank"><button className="btn">Download my resume</button></a>
            <br></br>
            <br></br>
            <div className="card-container flex-row space-around align-items-center">
            <div className="tech-card">
                <span className="tech-card-title">Front End Proficiencies</span>
                <div className="tech-card-body">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
            
            <div className="tech-card">
                <span className="tech-card-title">Back End Proficiencies</span>
                <div className="tech-card-body">
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Resume;