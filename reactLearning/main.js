import React, { PureComponent } from 'react';
import BlogComponent from './BlogComponent';

class Main extends PureComponent {
	state = {
		location: '',
	}

	render () {
		const mainContent = {
			'/blog': BlogComponent,
			'/knowledge-bank': KnowledgeComponent,
		}[this.state.location]

		return (
			<div>
				<Navbar location={this.state.location} />
				<Logo />
				<Footer />
				{this.mainContent ? <MainContent /> : <HomePage />}
			</div>
		)
	}
}

ReactDOM.render(
  Main,
  document.getElementById('app')
);
