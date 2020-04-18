import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage, trackWindowScroll }
  from 'react-lazy-load-image-component';

const CardList = ({ items, scrollPosition }) => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<div key = {item.id} className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
						<LazyLoadImage alt={index} src={item.thumb150path} scrollPosition={scrollPosition} />
						<div>
							<Link
								to={`/plants/${item.id}`}
							>
								<h3>{item.name}</h3>
							</Link>
							<p>{item.category}, {item.dataType}</p>
						</div>
					</div>
				);})
			}
		</div>
	);
}

export default trackWindowScroll(CardList);