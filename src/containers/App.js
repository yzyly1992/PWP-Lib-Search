import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import Detail from '../components/Detail';
import { connect } from 'react-redux';
import { setSearchField, requestPlants } from '../actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class App extends Component {

	componentDidMount() {
		this.props.onRequestPlants();
	}

	render() {
		const { searchField, items, isPending, onSearchChange } = this.props;
		const filteredPlants = items.filter(item => {
			return item.name.toLowerCase().includes(searchField.toLowerCase()) || item.category.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
		<h1>Loading</h1> :
		(
			<Router>
				<div>
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
				</div>
			</Router>
		);
		
	}
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);