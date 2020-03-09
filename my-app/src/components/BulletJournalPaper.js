import React from 'react';
import styled from 'styled-components';

const PaperSC = styled.div`
	width: ${({ scale }) => scale * 5.75}in;
	height: ${ ({ scale }) => scale * 8.25}in;
	background-color: #f7f8f3;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto;
	display: grid;

	grid-template-columns: repeat(27, 1fr);
	grid-template-rows: repeat(39, 1fr);
	padding: 20px 15px;
`;

const DotSC = styled.div`
	width: 1px;
	height: 1px;
	border-radius: 50%;
	background-color: #746060;
	grid-row: 0 -1;
	display: inline-block;
	grid-column: 0 -1;
`;

const Text = styled.div`
	position: absolute;
	font-size: 20px;
	font-family: monospace;
`;

const Row = () => <>
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC /><DotSC /><DotSC /><DotSC />
	<DotSC /><DotSC />
</>;

const BulletJournalPaper = () =>
	<PaperSC scale={0.8}>
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
			<p>This is a test. Cuentan de un sabio que un dia, tan pobre y misero estaba. Que solo se sustentaba, de unas hojas que el comia. Meie Script
			</p>
		</Text>
	</PaperSC >;

export { BulletJournalPaper }