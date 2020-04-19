import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import 'tachyons';
import App from './containers/App';

const rootReducer = combineReducers({
	searchRobots,
	requestRobots
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
