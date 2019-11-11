import React from 'react';

function HeroSection() {
	return (
		<section id="home" className="hero-section">
			<header className="header">
				<p className="username">@jorenrui</p>
				<nav className="nav">
					<ul>
						<li>
							<a href="#home" className="link">
								Home
							</a>
						</li>
						<li>
							<a href="#work" className="link">
								Work
							</a>
						</li>
						<li>
							<a href="#about" className="link">
								About
							</a>
						</li>
						<li>
							<a href="#blog" className="link">
								Blog
							</a>
						</li>
						<li>
							<a href="#design" className="link">
								Design
							</a>
						</li>
						<li>
							<a href="#contact" className="link">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<div className="content">
				<h1 className="display-1">joeylene.</h1>
				<p className="description">
					a web developer who has a thing for simplicity, knowledge,
					and problem solving.
				</p>
				<button className="btn btn-lg">contact me</button>

				<img
					src="logo.svg"
					alt="Joeylene Rivera's Logo"
					className="bg-logo"
				/>
			</div>
			<div className="social-media-icons">
				<a
					target="_blank"
					href="https://twitter.com/jorenrui/"
					rel="noopener noreferrer"
				>
					<i
						className="fab fa-twitter fa-lg"
						title="Joeylene Rivera's Twitter Profile"
					></i>
				</a>
				<a
					target="_blank"
					href="https://instagram.com/jorenrui/"
					rel="noopener noreferrer"
				>
					<i
						className="fab fa-instagram fa-lg"
						title="Joeylene Rivera's Instagram Profile"
					></i>
				</a>
				<a
					target="_blank"
					href="https://github.com/jorenrui/"
					rel="noopener noreferrer"
				>
					<i
						className="fab fa-github fa-lg"
						title="Joeylene Rivera's GitHub Profile"
					></i>
				</a>
				<a
					target="_blank"
					href="https://dev.to/jorenrui"
					rel="noopener noreferrer"
				>
					<i
						className="fab fa-dev fa-lg"
						title="Joeylene Rivera's DEV Profile"
					></i>
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/jorenrui/"
					rel="noopener noreferrer"
				>
					<i
						className="fab fa-linkedin fa-lg"
						title="Joeylene Rivera's LinkedIn Profile"
					></i>
				</a>
			</div>
		</section>
	);
}

export default HeroSection;
