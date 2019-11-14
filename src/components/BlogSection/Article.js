import React from "react";

function Article(props) {
	return (
		<article className="article-item">
			<p className="text-muted">{props.published_at}</p>
			<h3 className="mt-0">
				<a target="_blank" rel="noopener noreferrer" href={props.link}>
					{props.title}
				</a>
			</h3>
			<p>{props.description}</p>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={props.link}
				className="text-link-primary"
			>
				READ MORE
			</a>
		</article>
	);
}

export default Article;
