import React from 'react';
import styled from 'styled-components';

const PageSC = styled.div`
	width: ${({ scale }) => scale * 5.75}in;
	height: ${ ({ scale }) => scale * 8.25}in;
	background-color: #f7f8f3;
	position: relative;
	display: grid;
	padding: 20px 15px;

	border-radius: ${ ({ leftPageOrRightPage }) => {
		if (leftPageOrRightPage === 'leftPage')
			return '20px 0 0 20px';
		else if (leftPageOrRightPage === 'rightPage')
			return '0 20px 20px 0';
	}};

	background-image: ${ ({ leftPageOrRightPage }) => {
		if (leftPageOrRightPage === 'leftPage')
			return 'none';
		else if (leftPageOrRightPage === 'rightPage')
			return 'linear-gradient(to right, rgba(0, 0, 0, .15) 0%, rgba(0, 0, 0, 0) 10%)';
	}};

	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto;
`;

const DottedPageSC = styled(PageSC)`
position: absolute;
display: grid;
grid-template-columns: repeat(27, 1fr);
grid-template-rows: repeat(39, 1fr);
`;

const DotSC = styled.div`
width: 1px;
height: 1px;
border-radius: 50%;
background-color: #746060;
grid-row: 0 -1;
grid-column: 0 -1;
`;

const Dots = () => {
	let dotsArray;
	for (dotsArray = []; dotsArray.length < (27 * 39); dotsArray = [...dotsArray, <DotSC />]) { }
	return dotsArray;
}
const DottedPage = props =>
	<DottedPageSC scale={0.8} leftPageOrRightPage={props.leftPageOrRightPage}>
		<Dots />

	</DottedPageSC>;


const Page = props =>
	<PageSC scale={0.8}>{props.children}</PageSC>;


export { Page, DottedPage };