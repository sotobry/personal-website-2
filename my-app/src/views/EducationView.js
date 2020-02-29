import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Paper = styled.div`
width: calc(${({ scale }) => scale * 8.5}in);
height: calc(${({ scale }) => scale * 11}in);
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
			<Paper scale={0.7}>
				<h2>Education</h2>
			</Paper>
		</>
	);
}

export { EducationView };