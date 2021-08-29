import React from 'react';
import githubIcon from '../../assets/icons/GitHub-Mark-Light-32px.png';
import techBlogImg from '../../assets/images/tech-blog.png';
import weatherDashImg from '../../assets/images/weather-dashboard.png';
import clonelloImg from '../../assets/images/Clonello.png';
import quizImg from '../../assets/images/code-quiz.png';
import happyMealsImg from '../../assets/images/happy-meals.png';
import budgetImg from '../../assets/images/budget-tracker.png';
// import bikeSleuthImg from '../../assets/images/bike-sleuth.png';
import { Carousel } from 'react-carousel-minimal';

function Carousel() {
    const work = [
        {
            caption: 'Bike Sleuth',
            appLink: 'https://bikesleuth.herokuapp.com/#/',
            repoLink: 'https://github.com/Chrisdocs/FindMyBike',
            languages: 'MERN, JavaScript, Tailwind',
            image: budgetImg,
            description: 'Full stack app for storing bike information to aid in searching for lost bikes'
        },
        {
            caption: 'Tech Blog',
            appLink: 'https://protected-oasis-13537.herokuapp.com/',
            repoLink: 'https://github.com/akman47/tech-blog',
            languages: 'JavaScript, mySQL, Handlebars, Node',
            image: techBlogImg,
            description: 'Full stack app for sharing thoughts and articles'
        },
        {
            caption: 'Weather Dashboard',
            appLink: 'https://akman47.github.io/weather-dashboard/',
            repoLink: 'https://github.com/akman47/weather-dashboard',
            languages: 'HTML, CSS, JavaScript, Moment',
            image: weatherDashImg,
            description: 'Frontend JS app for checking the weather'
        },
        {
            caption: 'Clonello',
            appLink: 'https://powerful-falls-76508.herokuapp.com/',
            repoLink: 'https://github.com/akman47/Clonello',
            languages: 'JavaScript, mySQL, Handlebars',
            image: clonelloImg,
            description: 'Full stack app using Handlebars and mySql for creating and tracking tasks for projects'
        },
        {
            title: 'Coding Quiz',
            appLink: 'https://akman47.github.io/code-quiz/',
            repoLink: 'https://github.com/akman47/code-quiz',
            languages: 'HTML, CSS, JavaScript',
            image: quizImg,
            caption: 'Frontend JS Code Quiz to test your knowledge'
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
            image: budgetImg,
            caption: 'A basic PWA for tracking budgets'
        }
    ];

    // function generateCaption() {
    //     {work.map(project => (
    //         <article className="project-card" key={project.title} style={{backgroundImage: `url(${project.snapshot})`}}>
    //             <div className="project-content flex-column space-between">
    //                 <div className="project-title flex-row align-items-center space-between" key={project.title}>
    //                     <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
    //                     <a href={project.repoLink} target="_blank"><img src={githubIcon} style={{width: "30px", height: "30px"}} alt="" className="project-icon"></img></a>
    //                 </div>
    //                 <span className="project-info">{project.description}</span>
    //             </div>
    //         </article>
    //     ))}
    // }

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold'
    }

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold'
    }

    return (
        <div className="project-container flex-row space-evenly">
            <div style={{ textAlign: "center" }}>
                <h2></h2>
                <div style={{
                    padding: "0 20px"
                    }}>
                    <Carousel
                        data={work}
                        time={4000}
                        width="950px"
                        height="450px"
                        captionStyle={captionStyle}
                        radius="5px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="top"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="contain"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Carousel;