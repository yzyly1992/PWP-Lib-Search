import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';

const CardList = ({ items, dataType, scrollPosition }) => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<div key = {item.id} className='tc dib pa3 ma2 grow br3 ba dark-gray b--black-10 mw5'>
							<Link
								to={`/${dataType}/${item.id}`}
							>
								<LazyLoadImage alt={index} src={item.thumb150path} scrollPosition={scrollPosition} height="100px" />
								<h3>{item.name}</h3>
							</Link>
							<p className="f6 mt0">{item.category}, {item.dataType}</p>
					</div>
				);})
			}
		</div>
	);
}

export default trackWindowScroll(CardList);