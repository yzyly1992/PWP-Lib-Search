import React from 'react';

const Card = ({ name, category, dataType, thumb150path, path }) => {
	return (
			<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='items' src={thumb150path} />
				<div>
					<a href={`file://${path}`} target="_blank"><h2>{name}</h2></a>
					<p>{category}, {dataType}</p>
				</div>
			</div>
		);
}

export default Card;