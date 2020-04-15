import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', height: '1100px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;