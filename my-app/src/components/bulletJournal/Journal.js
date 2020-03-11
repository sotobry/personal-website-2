import React, { useState } from 'react';
import styled from 'styled-components';
import { Page, DottedPage, ContentPage } from './Pages';

const JournalSC = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Journal = () => {
	const [pages] = useState([<DottedPage leftPageOrRightPage='leftPage' pageNum={2} />, <DottedPage leftPageOrRightPage='rightPage' pageNum={3} />])
	return (
		<JournalSC>
			{/* <Page leftPageOrRightPage='leftPage' /> */}
			{/* <DottedPage leftPageOrRightPage='leftPage' /> */}
			{/* <ContentPage leftPageOrRightPage='rightPage' /> */}
			{/* <DottedPage leftPageOrRightPage='rightPage' /> */}
			{pages}
		</JournalSC>
	);
};

export { Journal };