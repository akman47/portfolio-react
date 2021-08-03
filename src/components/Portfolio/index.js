import React from 'react';
import Project from '../Project';
import ProjectB from '../ProjectB';

function Portfolio() {
    return (
        <section id="Portfolio">
            <h1>Portfolio</h1>
            <div className="project-container flex-row">
                <Project></Project>
            </div>
        </section>
    )
}

export default Portfolio;