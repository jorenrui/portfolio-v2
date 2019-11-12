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
				<button className="btn btn-lg">contact me</button>
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
