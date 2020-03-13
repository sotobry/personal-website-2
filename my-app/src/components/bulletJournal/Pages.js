import React, { useState } from 'react';
import styled from 'styled-components';

const PageSC = styled.div`
	width: ${({ scale }) => scale * 5.75}in;
	height: ${ ({ scale }) => scale * 8.25}in;
	background-color: #f7f8f3;
	position: relative;
	display: grid;
	grid-template-rows: 1fr 10fr; 
	padding: 20px 15px;
	border-radius: ${ ({ side }) => {
		if (side === 'left')
			return '20px 0 0 20px';
		else if (side === 'right')
			return '0 20px 20px 0';
	}};

	background-image: ${ ({ side }) => {
		if (side === 'left')
			return 'none';
		else if (side === 'right')
			return 'linear-gradient(to right, rgba(0, 0, 0, .15) 0%, rgba(0, 0, 0, 0) 10%)';
	}};

	/* position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto; */
`;

const DottedPageSC = styled(PageSC)`
/* position: absolute; */
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

const Page = props => {
	// const [side] = useState('left');
	return (
		<PageSC scale={0.8} side={props.side}>{props.children}</PageSC>
	);
};

const Dots = () => {
	let dotsArray;
	for (dotsArray = []; dotsArray.length < (27 * 39); dotsArray = [...dotsArray, <DotSC key={dotsArray.length} />]) { }
	return dotsArray;
}
const PageNum = styled.p`
	position: absolute;
	left: ${({ side }) => {
		return side === 'left' ? 0 : 'init';
	}};
	right: 0;
	bottom: 0;
	color: #746060;
	margin: 15px 32px;
	font-family: 'Times New Roman';
	font-size: 10px;
`;
const Text = styled.div`
position: absolute;

	font-size: 16px;
	font-family: 'Meie Script';
	padding: 20px 30px 25px 30px;
	height: 100%;
	width: inherit;
	height: inherit;

	column-count: 2;
	column-fill: auto;
	column-gap: 15px;
	column-rule-style: solid;
	column-rule-width: 2px;
	/* column-rule-color: black; */

	color: #0000d8;
	hyphens: auto;
	text-shadow: #0000dd 0px 0.5px;
	line-height: 1;
`;

const DottedPage = props => {
	return (
		<DottedPageSC scale={0.8} side={props.side}>
			<Dots />
			<PageNum side={props.side}>{props.pageNum}</PageNum>
			<Text>{props.children}</Text>
		</DottedPageSC>
	);
};

const ContentPageSC = styled(PageSC)`
	color: #746060;
	display: grid;
	grid-template-rows: min-content 1fr;
	font-family: 'Times New Roman', Times, serif;
	h1 {
		/* background-color: red; */
		font-size: 16px;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 20px;
		font-weight: 400;
	}
	.contentTable {
		display: grid;
		grid-template-columns: 1fr 5fr;
		grid-template-rows: 2fr repeat(26, minmax(1fr, 1fr));
		max-height: inherit;
		margin: 0 35px 10px 35px;
		
		border-right: 1px solid rgba(116, 96, 96, 0.3);
		border-bottom: 1px solid rgba(116, 96, 96, 0.3);
	}
	.contentTable div {
		border-top: 1px solid rgba(116, 96, 96, 0.3);
		border-left: 1px solid rgba(116, 96, 96, 0.3);
		grid-row: 0 -1;
		grid-column: 0 -1;
		position: relative;
	}
	.contentTable p {
		position: absolute;
		color: blue;
		font-size: 25px;
		/* background-color: yellow; */
		line-height: 0.8;
		font-family: 'Meie Script';
		overflow-x: visible;
	}
	.contentTable div:nth-of-type(even) p {
		font-size: 16px;
		line-height: 1.5;
		font-weight: bold;
	}
	.contentTable .tableHeader {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		font-family: 'Times New Roman';
		color: #746060;
	}
`;
const contentData = [
	{
		startingPage: null,
		pagesText: '2-3',
		topic: 'Future Log'
	},
	{
		startingPage: null,
		pagesText: '4-7',
		topic: 'December'
	},
	{
		startingPage: null,
		pagesText: '249',
		topic: 'Possible collections'
	},
	{
		startingPage: null,
		pagesText: '248',
		topic: 'To-buy list'
	},
	{
		startingPage: null,
		pagesText: '246-7',
		topic: 'The Bullet Journal Method book notes'
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
	{
		startingPage: null,
		pagesText: '',
		topic: ''
	},
];
const ContentPage = props => <ContentPageSC scale={0.8} side={props.side} data={props.data}>
	<h1>Inhalt - Content - Contenu</h1>
	<div className='contentTable'>
		<div className='tableHeader'>Seiten<br />Pages</div>
		<div className='tableHeader'>Thema - Topic - Sujet</div>
		{props.data.map(({ pagesText, topic }) => <><div><p>{pagesText}</p></div><div><p>{topic}</p></div></>)}
	</div>
</ContentPageSC>;


export { Page, DottedPage, ContentPage };