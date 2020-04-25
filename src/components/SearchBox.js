import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2 mb3'>
			<input
				className='pa3 ba b--green bg-light-green' 
				type='search' 
				placeholder='●ω● type someth...' 
				onChange={searchChange}
			/>
		</div>
		);
}

export default SearchBox;