import React from 'react';
import styled from 'styled-components';

const PaperSC = styled.div`
	width: ${({ scale }) => scale * 5.75}in;
	height: ${ ({ scale }) => scale * 8.25}in;
	background-color: #f7f8f3;
	position: relative;
	display: grid;
	/* width: 100%; */
	grid-template-columns: repeat(27, 1fr);
	grid-template-rows: repeat(39, 1fr);
	padding: 20px 15px;
	


	`;
const LeftPaperSC = styled(PaperSC)`
	border-radius: 20px 0 0 20px;
	/* background-image: linear-gradient(to left, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 10%); */
`;
const RightPaperSC = styled(PaperSC)`
	border-radius: 0 20px 20px 0;
	background-image: linear-gradient(to right, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 10%);
`;
const DotSC = styled.div`
	width: 1px;
	height: 1px;
	border-radius: 50%;
	background-color: #746060;
	grid-row: 0 -1;
	grid-column: 0 -1;
	display: inline-block;

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
	column-rule-width: 1px;
	column-rule-color: black;

	color: #0000d8;
	hyphens: auto;
	text-shadow: #0000dd 0px 0.5px;
	line-height: 1;

`;

const Row = () => <>
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC />
</>;

const LeftPaper = props =>
	<LeftPaperSC scale={0.8}>
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row />

		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row />

		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row />

		<Text>
			<p>
				{props.children}
			</p>
		</Text>
	</LeftPaperSC >;
const RightPaper = props =>
	<RightPaperSC scale={0.8}>
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row />

		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row />

		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row /><Row /><Row />
		<Row /><Row /><Row />

		<Text>
			{props.children}
		</Text>
	</RightPaperSC >;

export { LeftPaper, RightPaper }