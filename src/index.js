import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let initialState = {
	value: '',
	searchItems: []
};

let reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SERCH_MOVIE':
			return Object.assign({}, state, {searchItems: action.searchItems})
		case 'INPUT_CHANGE':
			return Object.assign({}, state, {value: action.value});		
		default:
			return state;	
	}
}

let store = createStore(reducer);
window.store = store;
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
