import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = ({ item }) => 
    <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='item' src={item.thumb300path} />
        <div>
            <h2>{item.name}</h2>
            <p>{item.category}, {item.dataType}</p>
            <p>File Size: {item.fileSize}</p>
            <p>Image Size: {item.imageSize}</p>
            <p>Created at: {item.createTime}</p>
            <p>File Location: <a href={`file://${item.path}`} target="_blank" rel="noopener noreferrer">{item.path}</a></p>
            <Link
                to="/"
            >
                <button>Return to list</button>
            </Link>
        </div>
    </div>

const mapStateToProps = (state, ownProps) => {
    const item = state.requestPlants.items.find(item => item.id == ownProps.match.params.detailId)
    
    if (item) {
        return { item }
    } else {
        return { item: {} }
    }
}


export default connect(mapStateToProps)(Detail);