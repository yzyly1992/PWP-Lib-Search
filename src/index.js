import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Detail from './components/Detail';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchPlants, requestPlants } from './reducers';

const rootReducer = combineReducers({ searchPlants, requestPlants })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" component={ App } />
				<Route path="/plants/:detailId" component={ Detail } />
			</Switch>
		</Router>
	</Provider>,
	rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
