import React from 'react';
import githubIcon from '../../assets/icons/GitHub-Mark-Light-32px.png';

function Project() {
    const work = [
        {
            title: 'Tech Blog',
            appLink: 'https://protected-oasis-13537.herokuapp.com/',
            repoLink: 'https://github.com/akman47/tech-blog',
            languages: 'JavaScript, mySQL, Handlebars, Node.js',
            snapshot: '../../assets/images/tech-blog.png'
        },
        {
            title: 'Weather Dashboard',
            appLink: 'https://akman47.github.io/weather-dashboard/',
            repoLink: 'https://github.com/akman47/weather-dashboard',
            languages: 'HTML, CSS, JavaScript, Moment Js',
            snapshot: '../../assets/images/weather-dashboard.png'
        },
        {
            title: 'Clonello',
            appLink: 'https://powerful-falls-76508.herokuapp.com/',
            repoLink: 'https://github.com/akman47/Clonello',
            languages: 'JavaScript, mySQL, Handlebars',
            snapshot: '../../assets/images/Clonello.png'
        },
        {
            title: 'Coding Quiz',
            appLink: 'https://akman47.github.io/code-quiz/',
            repoLink: 'https://github.com/akman47/code-quiz',
            languages: 'HTML, CSS, JavaScript',
            snapshot: '../../assets/images/code-quiz.png'
        },
        {
            title: 'Happy Meals',
            appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
            repoLink: 'https://github.com/jmol721/get-you-a-happy-meal-toy-not-included',
            languages: 'HTML, CSS, JavaScript, Foundation, APIs',
            snapshot: '../../assets/images/happy-meals.png'
        }
    ];

    return (
        <div className="project-container flex-row space-evenly">
            {work.map(project => (
                <article className="project-card" key={project.title}>
                    <div className="project-title flex-row align-item-center m-8" key={project.title}>
                        <h3><a href={project.appLink} target="_blank">{project.title}</a></h3>
                        <a href={project.repoLink} target="_blank"><img src={githubIcon} alt="" className="project-icon"></img></a>
                    </div>
                    <span className="project-info">{project.languages}</span>
                </article>
            ))}
        </div>
    )
}

export default Project;