import React from 'react';
import Header from './HeroSection/Header';
import CTA from './HeroSection/CTA';
import SocialMedia from './HeroSection/SocialMedia';

function HeroSection() {
	return (
		<section id="home" className="hero-section">
			<Header />
			<CTA />
			<SocialMedia />
		</section>
	);
}

export default HeroSection;
