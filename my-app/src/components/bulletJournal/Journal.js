import React, { useState } from 'react';
import styled from 'styled-components';
import { Page, DottedPage, ContentPage } from './Pages';
import { journalData } from '../../data/journalData';

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

	if (leftSide.type === 'blank') LeftPage =
		props =>
			<Page side='left'>
				{props.children}
			</Page>;
	else if (leftSide.type === 'content') LeftPage =
		(props) =>
			<ContentPage side='left' data={leftSide.data}></ContentPage>;
	else if (leftSide.type === 'dotted') LeftPage =
		props =>
			<DottedPage side='left' pageNum={leftSide.pageNum}>{leftSide.text}</DottedPage>;


	if (rightSide.type === 'blank') RightPage = () =>
		<Page side='right' />;
	if (rightSide.type === 'content') RightPage = () =>
		<ContentPage side='right' data={rightSide.data} />;
	else if (rightSide.type === 'dotted') RightPage = () =>
		<DottedPage side='right' pageNum={rightSide.pageNum}>{rightSide.text}</DottedPage>;

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
			<LeftPage></LeftPage>
			<RightPage /><RightArrow />
		</JournalSC>
	);
};

export { Journal };