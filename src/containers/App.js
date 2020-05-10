import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import Detail from '../components/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setSearchField, requestPlants, changeDataType } from '../actions';
import { connect } from 'react-redux';
import ScrollMemory from 'react-router-scroll-memory';

const mapStateToProps = (state) => {
	return {
        searchField: state.searchPlants.searchField,
		items: state.requestItems.items,
		isPending: state.requestItems.isPending,
		error: state.requestItems.error,
		dataType: state.changeDataType.dataType
	}
}

const mapDispatchToProps = (dispatch) => {
	return { 
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestPlants: () => dispatch(requestPlants()),
		onChangeDataType: (type) => dispatch(changeDataType(type))
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestPlants()
    }
    render() {
        const { searchField, items, isPending, onSearchChange, dataType } = this.props;
		const filteredPlants = items.filter(item => {
			return searchField.toLowerCase().split("|").some(el => item.name.toLowerCase().includes(el)) || searchField.toLowerCase().split("|").some(el => item.category.toLowerCase().includes(el))
		});
        return (
			<div>
				<Router>
					<ScrollMemory />
					<Switch>
						<Route 
							exact 
							name="home"
							path="/"
							render={(props) => <Home {...props} isPending={isPending} onSearchChange={ onSearchChange } filteredPlants={ filteredPlants } dataType={ dataType } />}
						/>
						<Route 
							name="detail"
							path={["/plants/:detailId", "/people/:detailId", "/texture/:detailId", "/3d/:detailId"]}
							render={(props) => <Detail {...props} items={ items } dataType={ dataType } />}
						/>
					</Switch>
				</Router>
				<footer className="pv4 ph3 ph5-m ph6-l">
					<small className="f6 db tc black-60">© 2020 <b className="ttu">PWP Landscape Architecture</b> All Rights Reserved</small>
					<div className="tc mt2 mb4">
						<a href="#language" title="Language" className="f6 dib ph2 link dim black-60">Language</a>
						<a href="#terms" title="Terms" className="f6 dib ph2 link dim black-60">Terms of Use</a>
						<a href="#privacy" title="Privacy" className="f6 dib ph2 link dim black-60">Privacy</a>
					</div>
				</footer>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);