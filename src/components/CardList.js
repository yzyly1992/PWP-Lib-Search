import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<Card 
					key={index}
					id={item.id}
					name={item.name} 
					category={item.category} 
					dataType={item.dataType}
					thumb150path={item.thumb150path}
					/>
				);})
			}
		</div>
	);
}

export default CardList;