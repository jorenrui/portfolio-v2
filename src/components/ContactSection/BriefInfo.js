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
            <p className="title text-muted">Full Stack Developer</p>
            <p>
                I'm 23 years old and currently living in Manila, Philippines. I’m a Full Stack (JS) Developer that has NextJS, TypeScript, NodeJS and Rails under my toolbelt.
            </p>
            <p>
                Love my work? You can support me by donating at&nbsp;
                <a
                    target='_blank'
                    href='https://www.buymeacoffee.com/jorenrui'
                    rel='noopener noreferrer'
                    className='text-link-primary'
                >
                    buymeacoffee.com/jorenrui
                </a>
            </p>
            <SocialMedia />
        </div>
    );
}

export default BriefInfo;
