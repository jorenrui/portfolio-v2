import React from 'react';

function DesignItem(props) {
	return (
		<a
			target="_blank"
			href={props.link}
			rel="noopener noreferrer"
			className="image-link"
		>
			<img
				src={process.env.PUBLIC_URL + '/img/designs/' + props.image}
				alt={props.title}
			/>
		</a>
	);
}

export default DesignItem;
