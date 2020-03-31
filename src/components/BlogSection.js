import React from 'react';
import Article from './BlogSection/Article';
import articlesData from './../data/articlesData';

function BlogSection() {
	const articleItems = articlesData.map(item => (
		<Article key={item.id} {...item} />
	));

	return (
		<section id="blog" className="blog-section">
			<div className="title">
				<p className="text-muted">BLOG</p>
				<h2 className="mt-0">Articles</h2>
				<p>
					Since I like reading on
					<a
						target="_blank"
						href="https://dev.to/jorenrui/"
						rel="noopener noreferrer"
						className="text-link-primary"
					>
						DEV.to
					</a>
					, I write my blog posts there. Writing helps me understand
					the concepts that I’m learning better, so I would like to
					write more in the future.
				</p>
			</div>
			{articleItems}
		</section>
	);
}

export default BlogSection;
