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
			pageNum: 4
		},
		rightSide: {
			type: 'dotted',
			pageNum: 5
		}
	},
	{
		id: 5,
		leftSide: {
			type: 'dotted',
			pageNum: 6
		},
		rightSide: {
			type: 'dotted',
			pageNum: 7
		}
	}
];

const Journal = () => {
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

	const ArrowSC = styled.i`
		font-size: 100px;
		color: white;
		margin: 50px;
		transition-duration: 250ms;
		&:hover {
			transform: scale(1.2);
		}
	`;
	const LeftArrow = () =>
		<ArrowSC className="fas fa-angle-left" onClick={turnPageToLeft} />;
	const RightArrow = () =>
		<ArrowSC className="fas fa-angle-right" onClick={turnPageToRight} />;
	return (
		<JournalSC>
			<LeftArrow />
			<LeftPage />
			<RightPage />
			<RightArrow />
		</JournalSC>
	);
};

export { Journal };