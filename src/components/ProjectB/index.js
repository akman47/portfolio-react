import React from 'react';
// import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/swiper.min.css';
import "swiper/components/navigation/navigation.min.css";
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';

import githubIcon from '../../assets/icons/GitHub-Mark-Light-32px.png';
import techBlogImg from '../../assets/images/tech-blog.png';
import weatherDashImg from '../../assets/images/weather-dashboard.png';
import clonelloImg from '../../assets/images/Clonello.png';
import quizImg from '../../assets/images/code-quiz.png';
import happyMealsImg from '../../assets/images/happy-meals.png';
import teamProfileImg from '../../assets/images/team-profile.png';
import Project from '../Project';

// install Swiper Modules
SwiperCore.use([Navigation]);

function ProjectB() {
    const projectSlides = [
        {
            title: 'Tech Blog',
            appLink: 'https://protected-oasis-13537.herokuapp.com/',
            repoLink: 'https://github.com/akman47/tech-blog',
            languages: 'JavaScript, mySQL, Handlebars, Node',
            snapshot: techBlogImg
        },
        {
            title: 'Weather Dashboard',
            appLink: 'https://akman47.github.io/weather-dashboard/',
            repoLink: 'https://github.com/akman47/weather-dashboard',
            languages: 'HTML, CSS, JavaScript, Moment',
            snapshot: weatherDashImg
        },
        {
            title: 'Clonello',
            appLink: 'https://powerful-falls-76508.herokuapp.com/',
            repoLink: 'https://github.com/akman47/Clonello',
            languages: 'JavaScript, mySQL, Handlebars',
            snapshot: clonelloImg
        },
        {
            title: 'Coding Quiz',
            appLink: 'https://akman47.github.io/code-quiz/',
            repoLink: 'https://github.com/akman47/code-quiz',
            languages: 'HTML, CSS, JavaScript',
            snapshot: quizImg
        },
        {
            title: 'Happy Meals',
            appLink: 'https://jmol721.github.io/get-you-a-happy-meal-toy-not-included/',
            repoLink: 'https://github.com/jmol721/get-you-a-happy-meal-toy-not-included',
            languages: 'HTML, CSS, JavaScript, Foundation, APIs',
            snapshot: happyMealsImg
        },
        {
            title: 'Coming Soon',
            appLink: '',
            repoLink: 'https://github.com/akman47/team-profile-generator',
            languages: 'HTML, CSS, JavaScript, Node',
            snapshot: teamProfileImg
        }
    ];

    return (
        <>
        <Swiper navigation={true} className="mySwiper">
            {projectSlides.map(project => (
                <SwiperSlide key={project.title}>
                    <img className="carousel-photo" src={project.snapshot}></img>
                    <div className="project-content flex-column space-between">
                        <div className="project-title flex-row align-item-center">
                            <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
                            <a href={project.repoLink} target="_blank"><img src={githubIcon} style={{width: "30px", height: "30px"}} alt="" className="project-icon"></img></a>
                        </div>
                        <span className="project-info">{project.languages}</span>
                    </div>
                </SwiperSlide>
                )
            )}
        </Swiper>
        </>
    );
};

export default ProjectB();