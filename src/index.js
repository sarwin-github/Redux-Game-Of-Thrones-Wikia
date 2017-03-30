import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducer from './App/reducers/index';

import 'bootstrap/dist/css/bootstrap.css';

import { browserHistory } from 'react-router';
import Routes from './App/route/routes';

const store = createStore(allReducer);

ReactDOM.render(
  <Provider store={store}>
  	<Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
