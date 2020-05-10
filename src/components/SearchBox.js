import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2 cg'>
			<input
				className='ba pa3 br3 w5 b--black-20' 
				type='search' 
				placeholder='search keywords...' 
				onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;