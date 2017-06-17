import React from 'react';
import Citation from './Citation.js';
import citations from '../citations.js';

class App extends React.Component {
	
	state = {};

	componentWillMount() {
		this.genererCitation();
	}
	
	genererCitation = event => {
		// On transforme les citations en Array
		const keyArray = Object.keys(citations);

		// Une citation tirée au hasard
		const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];

		// Vérifie si déjà affichée
		if (this.state.citation === citations[randomKey].citation) {
			this.genererCitation();
			return
		}

		// Remplir la state
		this.setState(citations[randomKey]);
	};
	
	render() {
		return (
			<div>
				<Citation details={this.state}/>
				<button onClick={e => this.genererCitation(e)} >Une autre citation</button>
			</div>
		)
	}
}

export default App;