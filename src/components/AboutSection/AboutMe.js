import React from 'react';

function AboutMe() {
	return (
		<div className="about-me">
			<div className="name">
				<p className="text-muted">ABOUT ME</p>
				<h1 className="display-2 mt-0">
					<span className="highlight-primary">Joeylene</span>
				</h1>
				<h1 className="display-2">
					<span className="highlight-primary">Rivera</span>
				</h1>
			</div>
			<div className="description">
				<p>
					A <span className="highlight-hover">web developer</span>{' '}
					based in{' '}
					<span className="highlight-hover">Manila, Philippines</span>
					.
				</p>
				<p>
					Ever since I started working as a Web Developer Intern
					during the summer of 2017 and discovered the open-source, I
					got hooked in web development. Starting in November 2017, I
					started to get serious in learning the tech, starting with
					receiving the{' '}
					<span className="highlight-hover"></span> 
					<a
						target="_blank"
						href="https://www.freecodecamp.org/certification/merakireal/legacy-front-end"
						rel="noopener noreferrer"
						className="text-link-primary"
					>
						freeCodeCamp Front End Development Certificate
					</a>.
				</p>
				<p>
					Now I’m one semester away from graduating in 2020 as an{' '}
					<span className="highlight-hover">
						Information Technology major
					</span>
				</p>
			</div>
			<div className="title">
				<h1 className="display-2">
					<span className="highlight-primary">Web</span>
				</h1>
				<h1 className="display-2">
					<span className="highlight-primary">Developer</span>
				</h1>
			</div>
		</div>
	);
}

export default AboutMe;
