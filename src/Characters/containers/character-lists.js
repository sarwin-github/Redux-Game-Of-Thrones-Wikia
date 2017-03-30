import React, {Component} from 'react';
import {connect} from 'react-redux';

class CharacterLists extends Component{
	createCharacterListItem(){
		return this.props.characters.map((characters, index) => {
			return(
				<li key={index}>
					<h3>{characters.name}</h3>
					<h4>{characters.description}</h4>
				</li>
			);
		})
	}
	
	render(){
		return(
			<ul>{this.createCharacterListItem()}</ul>
		);

	}
}

function mapStateToProps(state){
	return{
		characters: state.characters,
	}
}


export default connect(mapStateToProps)(CharacterLists);