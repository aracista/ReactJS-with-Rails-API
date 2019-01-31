import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Idea from './Idea';

class IdeaContainer extends Component {
	constructor(props){
		super(props)
		this.state = {ideas: []}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/ideas').then(response => {
			this.setState({ideas: response.data})
		}).catch(error => {
			console.log(error)
		})
	}

	handleClick = (e) => {
		axios.post('http://localhost:3001/ideas', {idea: {title: 'test', content: 'tes tes tes'}}).then(response => {
			const ideas = this.state.ideas
			ideas.unshift(response.data)
			this.setState({ideas: ideas})
		}).catch(error => {
			console.log(error)
		})

	}
	render(){
		return (
			<div>
				<div>
					<button onClick={this.handleClick} className="idea-Button">New Idea</button>
				</div>
				{this.state.ideas.map((idea) => {
				 	return (
				 		<Idea key={idea.id} idea={idea} />
				 	)
				})}
			</div>
		)
	}
}


export default IdeaContainer
