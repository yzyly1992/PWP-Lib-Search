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
        if (data !== undefined && data !== null && Object.keys(data).length !== 0) {
            var kgitem = document.createElement('div');
            kgitem.id='rel';
            kgitem.className='tc bg-white br3 pa3 ma2 mw7 shadow-5';
            document.getElementById("detail").appendChild(kgitem);
            if ("image" in data[0].result) {
            var kgimg = document.createElement('img');
            kgimg.src = data[0].result.image.contentUrl;
            document.getElementById("rel").appendChild(kgimg);
            };
            var kghead = document.createElement('h2');
            kghead.textContent = data[0].result.name;
            document.getElementById("rel").appendChild(kghead);
            if ("detailedDescription" in data[0].result) {
            var kgdesc = document.createElement('p');
            kgdesc.textContent = data[0].result.detailedDescription.articleBody;
            document.getElementById("rel").appendChild(kgdesc);
            var kglink = document.createElement('a');
            kglink.href = data[0].result.detailedDescription.url;
            kglink.textContent = data[0].result.detailedDescription.url;
            kglink.target="_blank";
            document.getElementById("rel").appendChild(kglink);
            };
        }
    });

    return (
        <div id="detail" className="flex items-center flex-column">
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
        </div>
    );
}

export default Detail;