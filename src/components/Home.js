import React, { Component } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import { connect } from 'react-redux';
import { setSearchField, requestPlants, requestPeople, requestTexture, request3D, requestFaceme, changeDataType } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onRequestPlants: () => dispatch(requestPlants()),
    onRequestPeople: () => dispatch(requestPeople()),
    onRequestTexture: () => dispatch(requestTexture()),
    onRequest3D: () => dispatch(request3D()),
    onRequestFaceme: () => dispatch(requestFaceme()),
    onChangeDataType: (type) => dispatch(changeDataType(type)),
    onSetSearch: (keyword) => dispatch(setSearchField(keyword)),
});

class Home extends Component {
    renderSwitch(param) {
        switch(param) {
            case 'plants':
                return (
                    <ul className="list">
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("shrub")} className="f7 db pa2 link dim dark-gray ba b--black-20">Shrub</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("aquatic")} className="f7 db pa2 link dim dark-gray ba b--black-20">Aquatic</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("tree")} className="f7 db pa2 link dim dark-gray ba b--black-20">Tree</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("flower")} className="f7 db pa2 link dim dark-gray ba b--black-20">Flower</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("groundcover")} className="f7 db pa2 link dim dark-gray ba b--black-20">Groundcover</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("grass")} className="f7 db pa2 link dim dark-gray ba b--black-20">Grass</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("palm")} className="f7 db pa2 link dim dark-gray ba b--black-20">Palm</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("succulent")} className="f7 db pa2 link dim dark-gray ba b--black-20">Succulent</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("nz")} className="f7 db pa2 link dim dark-gray ba b--black-20">New Zealand</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("other")} className="f7 db pa2 link dim dark-gray ba b--black-20">Other</a></li>
                    </ul>
                )
            case 'people':
                return (
                    <ul className="list">
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("bike")} className="f7 db pa2 link dim dark-gray ba b--black-20">Bike</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("man")} className="f7 db pa2 link dim dark-gray ba b--black-20">Man</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("woman")} className="f7 db pa2 link dim dark-gray ba b--black-20">Woman</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("boy")} className="f7 db pa2 link dim dark-gray ba b--black-20">Boy</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("girl")} className="f7 db pa2 link dim dark-gray ba b--black-20">Girl</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("couple")} className="f7 db pa2 link dim dark-gray ba b--black-20">Couple</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("group")} className="f7 db pa2 link dim dark-gray ba b--black-20">Group</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("indian")} className="f7 db pa2 link dim dark-gray ba b--black-20">Indian</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("diverse")} className="f7 db pa2 link dim dark-gray ba b--black-20">Diverse</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("other")} className="f7 db pa2 link dim dark-gray ba b--black-20">Other</a></li>
                    </ul>
                )
            case '3d':
                return (
                    <ul className="list">
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("furni|seat|table|chair|couch")} className="f7 db pa2 link dim dark-gray ba b--black-20">Furniture</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("element|furniture structures|recreation|site f|street|utilities|stone")} className="f7 db pa2 link dim dark-gray ba b--black-20">Site Element</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("people|2d gray|collection|girl|2d photo|bik|man|group")} className="f7 db pa2 link dim dark-gray ba b--black-20">People</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("transp|bic|bik")} className="f7 db pa2 link dim dark-gray ba b--black-20">Transport</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("construct|foundation|hvac|brick|cmu|roof|stair|steel|insite")} className="f7 db pa2 link dim dark-gray ba b--black-20">Construction</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("light")} className="f7 db pa2 link dim dark-gray ba b--black-20">Light</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("plant|ornament|shrub|tree")} className="f7 db pa2 link dim dark-gray ba b--black-20">Plants</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("cabin|door|fireplace|bed|desk|dress|stor|interior|game|plumb|window")} className="f7 db pa2 link dim dark-gray ba b--black-20">Interior</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("appliance|electr|machine")} className="f7 db pa2 link dim dark-gray ba b--black-20">Appliance</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("other|flag|kiosk|water")} className="f7 db pa2 link dim dark-gray ba b--black-20">Other</a></li>
                    </ul>
                )
            case 'texture':
                return (
                    <ul className="list">
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("stone")} className="f7 db pa2 link dim dark-gray ba b--black-20">Stone</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("granite")} className="f7 db pa2 link dim dark-gray ba b--black-20">Granite</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("concrete")} className="f7 db pa2 link dim dark-gray ba b--black-20">Concrete</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("metal")} className="f7 db pa2 link dim dark-gray ba b--black-20">Metal</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("asphalt")} className="f7 db pa2 link dim dark-gray ba b--black-20">Asphalt</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("plant")} className="f7 db pa2 link dim dark-gray ba b--black-20">Plant</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("brick")} className="f7 db pa2 link dim dark-gray ba b--black-20">Brick</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("glass")} className="f7 db pa2 link dim dark-gray ba b--black-20">Glass</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("cobble")} className="f7 db pa2 link dim dark-gray ba b--black-20">Cobble</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("wood")} className="f7 db pa2 link dim dark-gray ba b--black-20">Wood</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("pav")} className="f7 db pa2 link dim dark-gray ba b--black-20">Paving</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("sky")} className="f7 db pa2 link dim dark-gray ba b--black-20">Sky</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("other")} className="f7 db pa2 link dim dark-gray ba b--black-20">Other</a></li>
                    </ul>
                )
            case 'faceme':
                return (
                    <ul className="list">
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("people")} className="f7 db pa2 link dim dark-gray ba b--black-20">People</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("shrub")} className="f7 db pa2 link dim dark-gray ba b--black-20">Shrub</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("aquatic")} className="f7 db pa2 link dim dark-gray ba b--black-20">Aquatic</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("tree")} className="f7 db pa2 link dim dark-gray ba b--black-20">Tree</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("flower")} className="f7 db pa2 link dim dark-gray ba b--black-20">Flower</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("groundcover")} className="f7 db pa2 link dim dark-gray ba b--black-20">Groundcover</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("grass")} className="f7 db pa2 link dim dark-gray ba b--black-20">Grass</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("palm")} className="f7 db pa2 link dim dark-gray ba b--black-20">Palm</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("succulent")} className="f7 db pa2 link dim dark-gray ba b--black-20">Succulent</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("nz")} className="f7 db pa2 link dim dark-gray ba b--black-20">New Zealand</a></li>
                        <li className="dib mr1 mb1"><a href="#0" onClick={() => this.props.onSetSearch("other")} className="f7 db pa2 link dim dark-gray ba b--black-20">Other</a></li>
                    </ul>
                )
            default:
                return
        }
    }
    render() {
        return(
            <div className='tc'>
                <div className='sticky bg-white'>
                    <h1 className='f2 mb3 dib mr2 cg black-80'>PWP Library Search</h1>
                    <p className="dib cg f7">Beta 3.3.3</p>
                    <SearchBox searchChange={ this.props.onSearchChange }/>
                    <div className="tc cg mt2">
                        <a className="f6 f5-ns black dib mr3 hover-yellow" href="#plants" onClick= {() => { this.props.onRequestPlants(); this.props.onChangeDataType('plants'); this.props.onSetSearch('')}} >Plants</a>
                        <a className="f6 f5-ns black dib mr3 hover-light-pink" href="#people" onClick={() => {this.props.onRequestPeople(); this.props.onChangeDataType('people'); this.props.onSetSearch('')}} >People</a>
                        <a className="f6 f5-ns black dib mr3 hover-blue" href="#texture" onClick={() => {this.props.onRequestTexture(); this.props.onChangeDataType('texture'); this.props.onSetSearch('')}} >Texture</a>
                        <a className="f6 f5-ns black dib mr3 hover-green" href="#faceme" onClick={() => {this.props.onRequestFaceme(); this.props.onChangeDataType('faceme'); this.props.onSetSearch('')}} >Face-Me</a>
                        <a className="f6 f5-ns black dib hover-silver" href="#3d" onClick={() => {this.props.onRequest3D(); this.props.onChangeDataType('3d'); this.props.onSetSearch('')}}>3D</a>
                    </div>
                    {this.renderSwitch(this.props.dataType)}
                </div>
                {this.props.isPending
                    ? <p className='tc'>Loading...</p> 
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