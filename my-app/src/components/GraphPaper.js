import React from 'react';
import styled from 'styled-components';
import graphPaperURL from '../images-sm/graphPaper.png';
import { zoom } from '../zoom';

const GraphPaperSC = styled.div`
	width: ${({ scale }) => scale * 8.27}in;
	height: ${ ({ scale }) => scale * 11.69}in;

	background-image: url(${graphPaperURL});
	background-size: contain;

	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: 150px;

	padding: ${ ({ scale }) => scale * 0.5}in;

/* --------------------------------------------- */

h1, h2, h3 {font-weight: bold;}

a {color: navy;}

h1 {
	font-size: ${ ({ scale }) => scale * 46}px;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: ${ ({ scale }) => scale * 20}px;
}

h2 {
	font-size: ${ ({ scale }) => scale * 0.6 * 46}px;
	margin-top: ${ ({ scale }) => scale * 15}px;
	margin-bottom: ${ ({ scale }) => scale * 10}px;
}

h3 { font-size: ${ ({ scale }) => scale * 0.5 * 46}px;}

p, li { 
	font-size: ${ ({ scale }) => scale * 0.375 * 46}px;
	background-color: rgba(255, 255, 255, 0.625);
}

li {
	list-style-type: disc;
	margin-top: ${ ({ scale }) => scale * 10}px;
	margin-bottom: ${ ({ scale }) => scale * 10}px;
	margin-left: ${ ({ scale }) => scale * 40}px;
}
`;

const GraphPaper = props => {
	const { data: { title, tldr, tech, situation, endUsersInfo, highlightSection }, scale } = props;
	return (
		<GraphPaperSC className='GraphPaper' scale={scale} onClick={() => zoom.to({ element: document.querySelector('.GraphPaper') })}>
			<a href='https://lastoyota.com' target='_blank' rel="noopener noreferrer"><h1>{title}</h1></a>

			<p><b>TL;DR</b>: {tldr}</p>

			<h2>Technologies used: {tech}</h2>

			<h2>Situation</h2>
			<p>{situation}</p>

			<h2>About the end users</h2>
			<p>{endUsersInfo}</p>

			<h2>Highlights</h2>
			{
				highlightSection.map(
					section =>
						<>
							<h3>{section.header}</h3>
							<ul>
								{section.highlights.map(highlight =>
									<li>{highlight}</li>
								)}
							</ul>
						</>
				)
			}
		</GraphPaperSC >
	);
}


export { GraphPaper };