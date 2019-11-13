import React from 'react';
import AboutMe from './AboutSection/AboutMe';
import Skills from './AboutSection/Skills';

function AboutSection() {
	return (
		<section id="about" className="about-section">
			<AboutMe />
			<Skills />
		</section>
	);
}

export default AboutSection;
