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
const DottedPage = props => {
	return (
		<DottedPageSC scale={0.8} side={props.side}>
			<Dots />
			<PageNum side={props.side}>{props.pageNum}</PageNum>
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

const ContentPage = props => <ContentPageSC scale={0.8} side={props.side}>
	<h1>Inhalt - Content - Contenu</h1>
	<div className='contentTable'>
		<div className='tableHeader'>Seiten<br />Pages</div>
		<div className='tableHeader'>Thema - Topic - Sujet</div>
		<div><p>2-3</p></div>
		<div><p>Future Log</p></div>
		<div><p>4-7</p></div>
		<div><p>December</p></div>
		<div><p>249</p></div>
		<div><p>Possible collections</p></div>
		<div><p>248</p></div>
		<div><p>To-buy list</p></div>
		<div><p>246-7</p></div>
		<div><p>The Bullet Journal Method book notes</p></div>
		<div><p>8-</p></div>
		<div><p>Two Lives</p></div>
		<div><p>18</p></div>
		<div><p>Budget</p></div>
		<div><p>20</p></div>
		<div><p>Sbux Hrs</p></div>
		<div><p>24</p></div>
		<div><p>To-Read List</p></div>
		<div><p>22-3</p></div>
		<div><p>Hua's website</p></div>
		<div><p>25</p></div>
		<div><p>To-Learn List</p></div>
		<div><p>28</p></div>
		<div><p>Goals</p></div>

		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
		<div></div><div></div>
	</div>
</ContentPageSC>;


export { Page, DottedPage, ContentPage };