import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = ({ items }) => {
    let { detailId } = useParams();
    // eslint-disable-next-line
    const item = items.find(item => item.id == detailId)
    return (
        <div className='tc bg-white br3 pa3 ma2 shadow-5'>
            <img alt='item' src={item.thumb300path} />
            <div>
                <h2>{item.name}</h2>
                <p>{item.category}, {item.dataType}</p>
                <p>File Size: {item.fileSize}</p>
                <p>Dimension: {item.imageSize[0]} x {item.imageSize[1]} px</p>
                <p>Created at: {item.createTime}</p>
                <p>Windows: <a href={`file://${item.path}`} target="_blank" rel="noopener noreferrer">{item.path}</a></p>
                <p>macOS: <a href={`file://${item.mac}`} target="_blank" rel="noopener noreferrer">{item.mac}</a></p>
                <Link
                    to="/"
                >
                    <p className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib navy">Return to List</p>
                </Link>
            </div>
        </div>
    )
}

export default Detail;