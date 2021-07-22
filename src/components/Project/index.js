import React from 'react';
import githubIcon from '../../assets/icons/GitHub-Mark-32px.png';

function Project() {
    const work = [
        {
            title: 'Tech Blog',
            appLink: 'https://protected-oasis-13537.herokuapp.com/',
            repoLink: '',
            languages: 'JavaScript, mySQL, Handlebars, Node.js',
            snapshot: '../../assets/images/tech-blog.png'
        },
        {
            title: 'Weather Dashboard',
            appLink: 'https://akman47.github.io/weather-dashboard/',
            repoLink: '',
            languages: 'HTML, CSS, JavaScript, Moment Js',
            snapshot: '../../assets/images/weather-dashboard.png'
        },
        {
            title: 'Clonello',
            appLink: 'https://powerful-falls-76508.herokuapp.com/',
            repoLink: '',
            languages: 'JavaScript, mySQL, Handlebars',
            snapshot: '../../assets/images/Clonello.png'
        },
        {
            title: 'Coding Quiz',
            appLink: 'https://akman47.github.io/code-quiz/',
            repoLink: '',
            languages: 'HTML, CSS, JavaScript',
            snapshot: '../../assets/images/code-quiz.png'
        },
        {
            title: 'Happy Meals',
            appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
            repoLink: '',
            languages: 'HTML, CSS, JavaScript, Foundation, APIs',
            snapshot: '../../assets/images/happy-meals.png'
        }
    ];

    return (
        <div>
            {work.map(project => (
                <article key={project.title}>
                    <div className="flex-row" key={project.title}>
                        <h3><a href={project.appLink} target="_blank">{project.title}</a></h3>
                        <a href={project.repoLink} target="_blank"><img src={githubIcon} alt=""></img></a>
                    </div>
                    <span>{project.languages}</span>
                </article>
            ))}
        </div>
    )
}

export default Project;