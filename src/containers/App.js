import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import Detail from '../components/Detail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setSearchField, requestPlants, changeDataType } from '../actions';
import { connect } from 'react-redux';

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
			return item.name.toLowerCase().includes(searchField.toLowerCase()) || item.category.toLowerCase().includes(searchField.toLowerCase())
		});
        return isPending ? <h1 className='tc'>Loading</h1> :
		(
			<div>
				<Router>
					<Switch>
						<Route 
							exact 
							name="home"
							path="/"
							render={(props) => <Home {...props} onSearchChange={ onSearchChange } filteredPlants={ filteredPlants } dataType={ dataType } />}
						/>
						<Route 
							name="detail"
							path={["/plants/:detailId", "/people/:detailId", "/texture/:detailId"]}
							render={(props) => <Detail {...props} items={ items } dataType={ dataType } />}
						/>
					</Switch>
				</Router>
				<footer className="pv4 ph3 ph5-m ph6-l light-green">
					<small className="f6 db tc">© 2020 <b className="ttu">PWP Landscape Architecture</b> All Rights Reserved</small>
					<div className="tc mt3 mb4">
						<a href="#language" title="Language" className="f6 dib ph2 link light-green dim">Language</a>
						<a href="#terms" title="Terms" className="f6 dib ph2 link light-green dim">Terms of Use</a>
						<a href="#privacy" title="Privacy" className="f6 dib ph2 link light-green dim">Privacy</a>
					</div>
				</footer>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);