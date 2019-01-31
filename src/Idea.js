import React, { Component } from 'react';
import './App.css';

class Idea extends Component {
	render(){
		return(
		<div className="card">
			<div className="title">
				{this.props.idea.title}
			</div>

			<div>
				{this.props.idea.content}
			</div>
		</div>
			)
	}
}

export default Idea