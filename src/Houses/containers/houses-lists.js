import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Well, Button } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {selectHouses} from '../actions/index';

class HousesList extends Component{
	createHousesListItem(){
		return this.props.houses.map((houses, i) => {
			return(
				<Well key={i}>
				<h3>House {houses.house}</h3>
				<h4>{houses.motto}</h4>
				<div className="text-right">
					<Button onClick={() => this.props.selectHouses(houses)}>View this house</Button>
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
		houses: state.houses,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectHouses}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HousesList);