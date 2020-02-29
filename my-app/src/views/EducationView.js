import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Paper = styled.div`
	--scale: 0.7;
	width: calc(var(--scale) * 8.5in);
	height: calc(var(--scale) * 11in);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	background-color: white;
	`;


const EducationView = () => {
	return (
		<>
			<Link to='/'>GO BACK</Link>
			<Paper>
				<h2>Education</h2>
			</Paper>
		</>
	);
}

export { EducationView };