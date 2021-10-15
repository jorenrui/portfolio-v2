import React from 'react';

function CTA() {
	return (
		<div className="content">
			<div className="cta">
				<h1 className="display-1 highlight-hover">joeylene.</h1>
				<p className="description">
					a <span className="highlight-hover">web developer</span> who
					has a thing for simplicity, knowledge, and problem solving.
				</p>
				<a href="#contact" className="btn btn-lg">
					contact me
				</a>
				<a
					target="_blank"
					href="https://jorenrui.notion.site"
					rel="noopener noreferrer"
					className="personal-link"
				>
					Get to know me personally.
				</a>
			</div>

			<div className="bg">
				<img
					src="logo.svg"
					alt="Joeylene Rivera's Logo"
					className="bg-logo"
				/>
			</div>
		</div>
	);
}

export default CTA;
