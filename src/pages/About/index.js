import React from 'react';
import bioImage from '../../assets/images/bio.jpg';
import podiumImage from '../../assets/images/spain-podium.JPG';

function About() {
    return(
        <section id="about">
            <h2 data-testid="about" className="about-header">About Me</h2>
            <div className="bio">
                <div className="img-container">
                    <img src={bioImage} className="bio-img" alt="Angela Man sitting at a table eating ice cream"></img>
                    <p>I am a full stack developer and an athletics performance coach. I have a science and mathematics background from a
                    Bachelor of Science in Biology at the University of Houston, along with minor concentrations in chemistry, mathematics, 
                    and medicine in society. I love solving algorithms and puzzles along with being creative, so developing web applications 
                    is an indulgence!</p>
                </div>
                <div className="img-container">
                    <p>When I am not creating content, I train and compete as a triathlete at the national and world level, 
                    while also aiding other athletes in reaching their goals. To unwind and recharge, I love to spend time outdoors, camping, 
                    hiking, and going on soul-filling adventures which inspire me to dive even deeper into my creativity. That's a great programming 
                    loop to be in! It puts the cherry on top of the ice-cream.
                    </p>
                    <img src={podiumImage} className="podium-img" alt="World Championships Podium in Spain"></img>

                </div>
                <br></br><br></br> 
                <span className="bio-end">If my work inspires you, let me know!</span>
            </div>
        </section>
    );
}

export default About;