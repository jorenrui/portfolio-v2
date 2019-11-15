import React from 'react';
import DesignItem from './DesignSection/DesignItem';
import designsData from './../data/designsData';

function WorkSection() {
	const designItems = designsData.map(item => (
		<DesignItem key={item.id} {...item} />
	));

	return (
		<section id="design" className="design-section">
			<div className="title">
				<p className="text-muted">DESIGN</p>
				<h2 className="mt-0">Vector Art & App Design</h2>
				<p>
					Besides coding, I also love making designs. I make them for
					fun. You’ll find my vector arts on my
					<a
						target="_blank"
						href="https://www.instagram.com/joeidesign/"
						rel="noopener noreferrer"
						className="text-link"
					>
						Instagram
					</a>{' '}
					account, and my app designs on my{' '}
					<a
						target="_blank"
						href="https://dribbble.com/jorenrui/"
						rel="noopener noreferrer"
						className="text-link"
					>
						Dribbble
					</a>{' '}
					account.
				</p>
			</div>
			<div className="design-grid">{designItems}</div>
		</section>
	);
}

export default WorkSection;
