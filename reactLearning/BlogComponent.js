import React, { PureComponent } from 'react';

const Heading = ({ heading }) => (
	<h2>{heading}</h2>
)

class BlogComponent extends PureComponent {
	state = {
		blogId: this.props.blogId,
		contentLoaded: false,
	}

	onComponentMount () {
		this.getContent();
	}

	getContent () {
		const url = '/api/post/' + blogId;
		fetch(url, (res, err) => {
			if (err) console.log('freak out');
			this.setState({
				heading: res.body.heading,
				content: res.body.content,
				topics: res.body.topics,
				contentLoaded: true,
			})
		})
	}

	render () {
		const { contentLoaded, heading, content, topics } = this.state;

		if (!contentLoaded) return <Spinner />

		return (
			<div>
				<Heading heading={heading} />
				<Content content={content} />
				<Topics topics={topics} />
				<RelatedContent />
			</div>
		)
	}
}

export default BlogComponent;
