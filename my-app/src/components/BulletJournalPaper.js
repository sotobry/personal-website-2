import React from 'react';
import styled from 'styled-components';

const PaperSC = styled.div`
	width: 300px;
	height: 300px;
	background-color: red;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto;
`;

const BulletJournalPaper = () =>
	<PaperSC>This is a paper</PaperSC>;

export { BulletJournalPaper }