import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	constructor() {
		super();
		this.state = {
			items: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch("./plants.json", {
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			 }
		  })
			.then(response => response.json())
			.then(plants => this.setState({ items: plants }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { items, searchfield } = this.state;
		const filteredPlants = items.filter(item =>{
			return item.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return (!items.length) ? 
		<h1>Loading</h1> :
		(
			<div className='tc'>
			<h1 className='f1'>PWP Lib Search</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList items={filteredPlants} />
				</ErrorBoundary>
			</Scroll>
			</div>
		);
		
	}
}

export default App;