import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', border: '0px dashed white', height: '700px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;