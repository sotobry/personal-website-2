import React from 'react';
import styled from 'styled-components';
import graphPaperURL from '../images/graphPaper.png';
const GraphPaperSC = styled.div`
	width: ${({ scale }) => scale * 8.27}in;
	height: ${ ({ scale }) => scale * 11.69}in;

	background-image: url(${graphPaperURL});
	background-size: contain;

	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: 350px;
`;

const GraphPaperTest = props => {
	const { data: { title, tldr, tech, situation, endUsersInfo, highlightSection }, scale } = props;
	return (
		<GraphPaperSC scale={scale}>
			<a href='https://lastoyota.com' target='_blank' rel="noopener noreferrer"><h1>{title}</h1></a>

			<p><b>TL;DR</b>: {tldr}</p>

			<h2>Technologies used: {tech}</h2>

			<h2>Situation</h2>
			<p>{situation}</p>

			<h2>About the end users</h2>
			<p>{endUsersInfo}</p>

			<h2>Highlights</h2>
			{highlightSection.map(
				section =>
					<>
						<h3>{section.header}</h3>
						<ul>
							{section.highlights.map(highlight =>
								<li>{highlight}</li>
							)}
						</ul>
					</>
			)}
		</GraphPaperSC>
	);
}


export { GraphPaperTest };