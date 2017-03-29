import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducer from './App/reducers/index';

import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(allReducer);

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);
