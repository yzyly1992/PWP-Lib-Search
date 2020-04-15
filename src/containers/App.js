import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import Detail from '../components/Detail';
import { connect } from 'react-redux';
import { setSearchField, requestPlants } from '../actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchPlants.searchField,
		items: state.requestPlants.items,
		isPending: state.requestPlants.isPending,
		error: state.requestPlants.error
	};
}

const mapDispatchToProps = (dispatch) => {
	return { 
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestPlants: () => dispatch(requestPlants())
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestPlants()
	}

	render() {
		const { searchField, items, isPending, onSearchChange } = this.props;
		const filteredPlants = items.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase()) || item.category.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
		<h1 className='tc'>Loading</h1> :
		(
			<div>
				<Router>
					<Switch>
						<Route 
							exact 
							name="home"
							path="/" 
							render={(props) => <Home {...props} onSearchChange={ onSearchChange } filteredPlants={ filteredPlants } />}
						/>
						<Route 
							name="detail"
							path="/plants/:detailId" 
							render={(props) => <Detail {...props} items={ items } />}
						/>
					</Switch>
				</Router>
				<footer class="pv4 ph3 ph5-m ph6-l light-green">
					<small class="f6 db tc">© 2020 <b class="ttu">PWP Landscape Architecture</b> All Rights Reserved</small>
					<div class="tc mt3 mb4">
						<a href="#" title="Language" class="f6 dib ph2 link light-green dim">Language</a>
						<a href="#" title="Terms" class="f6 dib ph2 link light-green dim">Terms of Use</a>
						<a href="#" title="Privacy" class="f6 dib ph2 link light-green dim">Privacy</a>
					</div>
				</footer>
			</div>
		);
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);