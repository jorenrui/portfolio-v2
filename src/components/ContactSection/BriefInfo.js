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
				I'm 21 years old and currently living in the Manila,
				Philippines. I’m a 4th year BSIT Student.
			</p>
			<p>
				Currently, I’m looking for an internship near Manila this second
				semester 2019-2020. If you are a recruiter, feel free to send me
				an message/email at <b>joeylenerivera@gmail.com</b>. I’ll get
				back to you as soon as I can.
			</p>
			<SocialMedia />
		</div>
	);
}

export default BriefInfo;
