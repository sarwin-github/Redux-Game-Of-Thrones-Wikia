import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Row, Col, Well } from 'react-bootstrap';

class HousesListDropdown extends Component{
	createHousesListItem(){
		return this.props.houses.map((houses, i) => {
			return(
				<li key={i} className="list-group-item"><a href="#">{houses.house}</a></li>
			);
		})
	}
	
	render(){
		return(
			<ul className="list-group">{this.createHousesListItem()}</ul>
		);

	}
}

function mapStateToProps(state){
	return{
		houses: state.houses
	}
}

export default connect(mapStateToProps)(HousesListDropdown);