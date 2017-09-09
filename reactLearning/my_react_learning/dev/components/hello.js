import React from 'react';

export class Hello extends React.Component {
	render() {
		return (
			console.log("hello from my file!"),
			<div>
				<p>Here is some text changed text {this.props.name}</p>
				<p>I am coming from the hello.js file with the name coming from the index.jsx file</p>
	
			</div>
		)
	};
};
