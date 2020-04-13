import React from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';

const Home = ({ onSearchChange, filteredPlants }) => 
    <div className='tc'>
        <h1 className='f1'>PWP LIB SEARCH</h1>
        <SearchBox searchChange={ onSearchChange }/>
        <Scroll>
            <ErrorBoundary>
               <CardList items={ filteredPlants } />
               </ErrorBoundary>
        </Scroll>
    </div>

export default Home;