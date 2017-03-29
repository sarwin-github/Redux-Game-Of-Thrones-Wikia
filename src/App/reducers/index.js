import {combineReducers} from 'redux';
import housesReducer from '../../Houses/reducers/reducer-houses';

const allReducers = combineReducers({
	houses: housesReducer,
});

//All reducers are now available to all components
export default allReducers;