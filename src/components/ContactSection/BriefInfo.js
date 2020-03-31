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
                I'm 22 years old and currently living in Manila, Philippines. I’m a Full Stack (JS) Developer and a BSIT student waiting for my graduation this 2020.
            </p>
            <SocialMedia />
        </div>
    );
}

export default BriefInfo;
