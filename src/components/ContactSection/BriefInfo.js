import React from 'react';
import SocialMedia from './../HeroSection/SocialMedia';

function BriefInfo() {
    return (
        <div className="brief-info">
            <img
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="Joeylene Rivera's Logo"
                className="logo"
            />
            <h3 className="name">Joeylene Rivera</h3>
            <p className="title text-muted">Web Developer</p>
            <p>
                I'm 21 years old and currently living in the Manila, Philippines. I’m a 4th year
                BSIT Student. Currently, I'm a Web Developer Intern and one semester away from
                graduating.
            </p>
            <SocialMedia />
        </div>
    );
}

export default BriefInfo;
