import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { requestPlants, requestPeople, requestTexture, changeDataType } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onRequestPlants: () => dispatch(requestPlants()),
    onRequestPeople: () => dispatch(requestPeople()),
    onRequestTexture: () => dispatch(requestTexture()),
    onChangeDataType: (type) => dispatch(changeDataType(type))
});

class Home extends Component {
    render() {
        return(
            <div className='tc'>
                <h1 className='f1'>PWP LIB SEARCH</h1>
                <div className="tc pb3">
                    <a className="link dim light-green f6 f5-ns dib mr3" href="#plants" onClick= {() => { this.props.onRequestPlants(); this.props.onChangeDataType('plants');}} >PLANTS</a>
                    <a className="link dim light-green f6 f5-ns dib mr3" href="#people" onClick={() => {this.props.onRequestPeople(); this.props.onChangeDataType('people');}} >PEOPLE</a>
                    <a className="link dim light-green f6 f5-ns dib mr3" href="#texture" onClick={() => {this.props.onRequestTexture(); this.props.onChangeDataType('texture');}} >TEXTURE</a>
                    <a className="link dim light-green f6 f5-ns dib" href="#project" title="Projects">PROJECT</a>
                </div>
                <SearchBox searchChange={ this.props.onSearchChange }/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList items={ this.props.filteredPlants } dataType={this.props.dataType} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
} 


export default connect(null, mapDispatchToProps)(Home);