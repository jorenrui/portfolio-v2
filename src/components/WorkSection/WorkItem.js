import React from 'react';

function WorkItem(props) {
	return (
		<div className="work-item">
			<div className="image">
				<img
					src={process.env.PUBLIC_URL + '/img/works/' + props.image}
					alt="SPCC Caloocan Portal Website"
				/>
			</div>
			<div className="info">
				<p className="text-muted">RECENT WORK</p>
				<h2 className="mt-0 highlight-hover">{props.title}</h2>
				<p>{props.description}</p>
				<h4 className="mt-1">Technologies Used</h4>
				<p>{props.techs}</p>
				<a href="#" className="btn btn-md">
					READ MORE
				</a>
			</div>
		</div>
	);
}

export default WorkItem;
