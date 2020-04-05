import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-light-green' 
				type='search' 
				placeholder='◃┆◉◡◉┆▷' 
				onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;