import React from 'react';
import Card from './Card';

const CardList = ({ items }) => {
	return (
		<div>
			{items.map((item, index) => {
				return (
					<Card 
					key={index}
					name={items[index].name} 
					category={items[index].category} 
					dataType={items[index].dataType}
					thumb150path={items[index].thumb150path}
					path={items[index].path}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;