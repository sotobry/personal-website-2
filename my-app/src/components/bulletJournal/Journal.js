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

const journalData = [
	{
		id: 0,
		leftSide: {
			type: 'blank',
		},
		rightSide: {
			type: 'content'
		}
	},
	{
		id: 1,
		leftSide: {
			type: 'content',
		},
		rightSide: {
			type: 'content',
		}
	},
	{
		id: 2,
		leftSide: {
			type: 'blank',
		},
		rightSide: {
			type: 'dotted',
			pageNum: 1
		}
	},
	{
		id: 3,
		leftSide: {
			type: 'dotted',
			pageNum: 2
		},
		rightSide: {
			type: 'dotted',
			pageNum: 3
		}
	},
	{
		id: 4,
		leftSide: {
			type: 'dotted',
			pageNum: 3
		},
		rightSide: {
			type: 'dotted',
			pageNum: 4
		}
	},
	{
		id: 5,
		leftSide: {
			type: 'dotted',
			pageNum: 5
		},
		rightSide: {
			type: 'dotted',
			pageNum: 6
		}
	}
];

const Journal = () => {
	// const [pages] = useState([<DottedPage side='left' pageNum={2} />, <DottedPage side='right' pageNum={3} />])
	const [pages, setPages] = useState(journalData[0]);
	console.log(pages.leftSide);
	const { leftSide, rightSide } = pages;

	const turnPageToRight = () => {
		setPages(prevPages => prevPages.id < journalData.length - 1 ?
			journalData[prevPages.id + 1] :
			prevPages);
		console.log('turning right');
	};

	const turnPageToLeft = () => {
		setPages(prevPages => prevPages.id > 0 ?
			journalData[prevPages.id - 1] :
			prevPages);
		console.log('turning left');
	};

	let LeftPage, RightPage;

	if (leftSide.type === 'blank') LeftPage = () =>
		<Page side='left' />;
	else if (leftSide.type === 'content') LeftPage = () =>
		<ContentPage side='left' />;
	else if (leftSide.type === 'dotted') LeftPage = () =>
		<DottedPage side='left' pageNum={leftSide.pageNum} />;


	if (rightSide.type === 'blank') RightPage = () =>
		<Page side='right' />;
	if (rightSide.type === 'content') RightPage = () =>
		<ContentPage side='right' />;
	else if (rightSide.type === 'dotted') RightPage = () =>
		<DottedPage side='right' pageNum={rightSide.pageNum} />;


	return (
		<JournalSC>
			{/* <Page side='left' /> */}
			{/* <ContentPage side='right' /> */}
			<button onClick={turnPageToLeft}>Left</button>
			<LeftPage />
			<RightPage />
			<button onClick={turnPageToRight}>Right</button>
		</JournalSC>
	);
};

export { Journal };