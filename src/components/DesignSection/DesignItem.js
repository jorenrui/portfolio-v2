import React from 'react';

function DesignItem(props) {
	return (
		<img
			src={process.env.PUBLIC_URL + '/img/designs/' + props.image}
			alt={props.title}
		/>
	);
}

export default DesignItem;
