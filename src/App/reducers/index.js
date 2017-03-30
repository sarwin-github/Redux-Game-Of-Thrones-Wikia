import {combineReducers} from 'redux';
import housesReducer from '../../Houses/reducers/reducer-houses';
import characterReducer from '../../Characters/reducers/reducer-characters';

const allReducers = combineReducers({
	houses: housesReducer,
	characters: characterReducer
});

//All reducers are now available to all components
export default allReducers;