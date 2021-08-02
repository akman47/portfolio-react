import React from 'react';
import homeCover from '../../assets/images/lost-mines.jpg';

function Home() {
    return (
        <div className="home">
            <img src={homeCover}></img>
            <span>Where inspiration lies, creativity follows</span>
        </div>
    )
}

export default Home;