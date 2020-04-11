import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { connect } from 'react-redux';
import { setSearchField, requestPlants } from '../actions';


class App extends Component {

	componentDidMount() {
		this.props.onRequestPlants();
	}

	render() {
		const { searchField, onSearchChange, items, isPending } = this.props;
		const filteredPlants = items.filter(item =>{
			return item.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? 
		<h1>Loading</h1> :
		(
            <div className='tc'>
                <h1 className='f1'>PWP Lib Search</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList items={filteredPlants} />
                    </ErrorBoundary>
                </Scroll>
            </div>
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