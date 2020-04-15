import React from 'react';
import { Link, useParams } from 'react-router-dom';
import KGSearch from 'google-kgsearch';

const Detail = ({ items }) => {
    let { detailId } = useParams();
    // eslint-disable-next-line
    const item = items.find(item => item.id == detailId);

    const kGraph = KGSearch('AIzaSyCfh7yXuBA7eZNkgssqrIUyiBLRgvBxvpE');

    let params = {
    query: item.name.replace(/ *\([^)]*\) */g, ""),
    limit: 1
    };

    kGraph.search(params, (err, data) => {
        if (err) { 
            console.error(err)
        };
        console.log(data);
        // if (data !== undefined && data !== null && data !== '' && data !== []) {
        if (data !== undefined && data !== null && Object.keys(data).length !== 0) {
            document.getElementById("kgname").appendChild(document.createTextNode(data[0].result.name));
            if ("detailedDescription" in data[0].result) {
            var img = document.createElement('img');
            img.src = data[0].result.image.contentUrl;
            document.getElementById("kgimage").appendChild(img)
            document.getElementById("kgdesc").appendChild(document.createTextNode(data[0].result.detailedDescription.articleBody));
            document.getElementById("kglink").appendChild(document.createTextNode(data[0].result.detailedDescription.url));
            document.getElementById("kglink").href = data[0].result.detailedDescription.url;
            };
        }
    })

    return (
        <div className="flex items-center flex-column">
            <div className='tc bg-white br3 pa3 ma2 mw7 shadow-5'>
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
            <div className='tc bg-white br3 pa3 ma2 mw7 shadow-5'>
                <div id="kgimage"></div>
                <h2 id="kgname"></h2>
                <p id="kgdesc"></p>
                <a id="kglink" href="#" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    );
}

export default Detail;