import React from 'react';
import bioImage from '../../assets/images/bio.jpg';

function About() {
    return(
        <section>
            <h1 id="about">About Me</h1>
            <div className="bio flex-row space-between">
                <img src={bioImage}>
                </img>
                <p>
                    I am currently studying to become a full stack developer. I love solving algorithms and puzzles 
                    along with being creative, so developing web applications is an indulgence! When I am not creating
                    content, I train and compete as a triathlete at the national and world level. To unwind
                    and recharge, I love to spend time outdoors, camping, hiking, and going on soul-filling adventures
                    which inspire me to dive even deeper into my creativity. That's a great programming loop to be in!
                    It puts the cherry on top of the ice-cream.
                    <br></br><br></br> 
                    If my work below inspires you, let me know!
                </p>
            </div>
        </section>
    );
}

export default About;