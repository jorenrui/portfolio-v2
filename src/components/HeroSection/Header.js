import React, { useState, useEffect } from 'react';
import SocialMedia from './SocialMedia';

function Header() {
	const [active, setActive] = useState(false);

	function handleClick() {
		setActive(prevState => !prevState);
	}

	useEffect(() => {
		let navMobile = document.getElementById('navMobile');
		let navIcon = document.getElementById('navIcon');

		if (active) {
			navMobile.style.display = 'block';
			navIcon.className = ' fa fa-2x fa-times';
		} else {
			navMobile.style.display = 'none';
			navIcon.className = 'fa fa-2x fa-bars';
		}
	}, [active]);

	return (
		<header className="header">
			<p className="username highlight-hover-sm">@jorenrui</p>

			<div className="mobile-nav">
				<button className="btn-icon" onClick={handleClick}>
					<i id="navIcon" className="fa fa-2x fa-bars"></i>
				</button>
			</div>
			<nav id="navMobile">
				<ul className="nav-list">
					<li>
						<a href="#home" className="mobile-link">
							Home
						</a>
					</li>
					<li>
						<a href="#work" className="mobile-link">
							Work
						</a>
					</li>
					<li>
						<a href="#about" className="mobile-link">
							About
						</a>
					</li>
					<li>
						<a href="#blog" className="mobile-link">
							Blog
						</a>
					</li>
					<li>
						<a href="#design" className="mobile-link">
							Design
						</a>
					</li>
					<li>
						<a href="#contact" className="mobile-link">
							Contact
						</a>
					</li>
				</ul>

				<SocialMedia />
			</nav>

			<nav id="navWide" className="nav">
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
	);
}

export default Header;
