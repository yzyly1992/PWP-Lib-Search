import React, { Component } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { requestPlants, requestPeople, requestTexture, request3D, changeDataType } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onRequestPlants: () => dispatch(requestPlants()),
    onRequestPeople: () => dispatch(requestPeople()),
    onRequestTexture: () => dispatch(requestTexture()),
    onRequest3D: () => dispatch(request3D()),
    onChangeDataType: (type) => dispatch(changeDataType(type))
});

class Home extends Component {
    render() {
        return(
            <div className='tc'>
                <div className='sticky samebg'>
                    <h1 className='f2 mb3 dib mr2'>PWP Library Search</h1>
                    <p className="light-green dib cg f7">Beta 3.0.5</p>
                    <div className="tc pb2 cg">
                        <a className="link light-green f6 f5-ns dib mr3 hover-yellow" href="#plants" onClick= {() => { this.props.onRequestPlants(); this.props.onChangeDataType('plants');}} >Plants</a>
                        <a className="link light-green f6 f5-ns dib mr3 hover-light-pink" href="#people" onClick={() => {this.props.onRequestPeople(); this.props.onChangeDataType('people');}} >People</a>
                        <a className="link light-green f6 f5-ns dib mr3 hover-navy" href="#texture" onClick={() => {this.props.onRequestTexture(); this.props.onChangeDataType('texture');}} >Texture</a>
                        <a className="link light-green f6 f5-ns dib hover-white" href="#3d" onClick={() => {this.props.onRequest3D(); this.props.onChangeDataType('3d');}}>3D</a>
                    </div>
                    <SearchBox searchChange={ this.props.onSearchChange }/>
                </div>
                {this.props.isPending
                    ? <h1 className='tc'>Loading</h1> 
                    : <div className='understicky'>
                        <ErrorBoundary>
                            <CardList items={ this.props.filteredPlants } dataType={this.props.dataType} />
                        </ErrorBoundary>
                      </div>
                }   
            </div>
        )
    }
} 


export default connect(null, mapDispatchToProps)(Home);