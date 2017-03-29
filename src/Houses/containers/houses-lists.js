import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Well, Button } from 'react-bootstrap';

class HousesList extends Component{
	createHousesListItem(){
		return this.props.houses.map((houses, i) => {
			return(
				<Well key={i}>
				<h3>House {houses.house}</h3>
				<h4>{houses.motto}</h4>
				<div className="text-right">
				<Button>View this house</Button>
				</div>
				</Well>
			);
		})
	}
	
	render(){
		return(
			<div>{this.createHousesListItem()}</div>
		);

	}
}

function mapStateToProps(state){
	return{
		houses: state.houses
	}
}

export default connect(mapStateToProps)(HousesList);