import React from 'react';

const Desk = props =>
	<>
		<div className='desk-y'></div>
		<div className='desk-x'></div>
		<div className='desk'></div>
		{props.children}
	</>

export { Desk };