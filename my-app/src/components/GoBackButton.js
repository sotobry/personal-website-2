import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GoBackButtonSC = styled(Link)`
	font-size: 3rem;
	background-color: white;
	position: absolute;
	top: 25px;
	left: 25px;
	display: flex;
	width: 50px;
	height: 50px;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	border-radius: 50%;
	padding: 2.2rem;
	color: black;
`;

const GoBackButton = () =>
	<GoBackButtonSC to='/'>
		<i class="fas fa-long-arrow-alt-left"></i>
	</GoBackButtonSC>
export { GoBackButton }