import React from 'react';
import githubIcon from '../../assets/icons/GitHub-Mark-Light-32px.png';
import techBlogImg from '../../assets/images/tech-blog.png';
import weatherDashImg from '../../assets/images/weather-dashboard.png';
import clonelloImg from '../../assets/images/Clonello.png';
import quizImg from '../../assets/images/code-quiz.png';
import happyMealsImg from '../../assets/images/happy-meals.png';
import budgetImg from '../../assets/images/budget-tracker.png';
// import bikeSleuthImg from '../../assets/images/bike-sleuth.png';

function Project() {
    const work = [
        {
            title: 'Bike Sleuth',
            appLink: 'https://bikesleuth.herokuapp.com/#/',
            repoLink: 'https://github.com/Chrisdocs/FindMyBike',
            languages: 'MERN, JavaScript, Tailwind',
            snapshot: budgetImg,
            description: 'Full stack app for storing bike information to aid in searching for lost bikes'
        },
        {
            title: 'Tech Blog',
            appLink: 'https://protected-oasis-13537.herokuapp.com/',
            repoLink: 'https://github.com/akman47/tech-blog',
            languages: 'JavaScript, mySQL, Handlebars, Node',
            snapshot: techBlogImg,
            description: 'Full stack app for sharing thoughts and articles'
        },
        {
            title: 'Weather Dashboard',
            appLink: 'https://akman47.github.io/weather-dashboard/',
            repoLink: 'https://github.com/akman47/weather-dashboard',
            languages: 'HTML, CSS, JavaScript, Moment',
            snapshot: weatherDashImg,
            description: 'Frontend JS app for checking the weather'
        },
        {
            title: 'Clonello',
            appLink: 'https://powerful-falls-76508.herokuapp.com/',
            repoLink: 'https://github.com/akman47/Clonello',
            languages: 'JavaScript, mySQL, Handlebars',
            snapshot: clonelloImg,
            description: 'Full stack app using Handlebars and mySql for creating and tracking tasks for projects'
        },
        {
            title: 'Coding Quiz',
            appLink: 'https://akman47.github.io/code-quiz/',
            repoLink: 'https://github.com/akman47/code-quiz',
            languages: 'HTML, CSS, JavaScript',
            snapshot: quizImg,
            description: 'Frontend JS Code Quiz to test your knowledge'
        },
        // {
        //     title: 'Happy Meals',
        //     appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
        //     repoLink: 'https://github.com/jmol721/get-you-a-happy-meal-toy-not-included',
        //     languages: 'HTML, CSS, JavaScript, Foundation, APIs',
        //     snapshot: happyMealsImg,
        //     description: 'A frontend app for finding and storing new recipes'
        // },
        {
            title: 'Budget Tracker',
            appLink: 'https://budget-tracker03.herokuapp.com/',
            repoLink: 'https://github.com/akman47/budget-tracker',
            languages: 'HTML, CSS, JavaScript, Node, MondoDB',
            snapshot: budgetImg,
            description: 'A basic PWA for tracking budgets'
        }
    ];

    return (
        <div className="project-container flex-row space-evenly">
            {work.map(project => (
                <article className="project-card" key={project.title} style={{backgroundImage: `url(${project.snapshot})`}}>
                    <div className="project-content flex-column space-between">
                        <div className="project-title flex-row align-items-center space-between" key={project.title}>
                            <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
                            <a href={project.repoLink} target="_blank"><img src={githubIcon} style={{width: "30px", height: "30px"}} alt="" className="project-icon"></img></a>
                        </div>
                        <span className="project-info">{project.description}</span>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Project;