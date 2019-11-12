import React from 'react';
import WorkItem from './WorkSection/WorkItem';
import worksData from './../data/worksData';

function WorkSection() {
	const workItems = worksData.map(item => (
		<WorkItem key={item.id} {...item} />
	));

	return (
		<section id="work" className="work-section">
			{workItems}
		</section>
	);
}

export default WorkSection;
