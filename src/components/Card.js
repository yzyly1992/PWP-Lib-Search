import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, category, dataType, thumb150path }) => {
	return (
			<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='items' src={thumb150path} />
				<div>
					<Link
						key={id} 
						to={`/plants/${id}`}
					>
						{name}
					</Link>
					<p>{category}, {dataType}</p>
				</div>
			</div>
		);
}

export default Card;