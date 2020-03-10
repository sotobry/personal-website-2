import React from 'react';
import styled from 'styled-components';

const PaperSC = styled.div`
	width: ${({ scale }) => scale * 5.75}in;
	height: ${ ({ scale }) => scale * 8.25}in;
	background-color: #f7f8f3;
	position: relative;
	display: grid;
	padding: 20px 15px;

	&.leftPage {
		border-radius: 20px 0 0 20px;
		background-image: url('a');
	}
	&.rightPage {
		border-radius: 0 20px 20px 0;
		background-image: linear-gradient(to right, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 10%);
	}

	&.dotted {
		grid-template-columns: repeat(27, 1fr);
		grid-template-rows: repeat(39, 1fr);
	}

	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto;
	`;

const Page = props =>
	<PaperSC className={props.leftPageOrRightPage} scale={0.8}>{props.children}</PaperSC>;

export { Page };