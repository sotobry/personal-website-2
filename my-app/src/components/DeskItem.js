import React from 'react';
import styled from 'styled-components';
import itemsData from '../data/itemsData';


const resume = itemsData.filter(item => item.name === 'resume')[0];

const ItemContainer = styled.div`
	position: absolute;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: all 0.25s;

	width: ${({ width }) => width};
	height: ${({ height }) => height};
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;

	transform: rotate(${({ rotation }) => rotation}deg);
		&:hover {
			/* --text-opacity: 1; */
			transform: scale(1.1) rotate(${({ rotation }) => rotation}deg);
		}
`;
const Link = styled.a`
	width: inherit;
	height: inherit;
	position: inherit;
`;
const Img = styled.img`
	width: inherit;
	height: inherit;
	position: inherit;
`;

const DeskItem = props => {
	const { scale } = props;
	const { name, hoverText, imgURL, mainDimension, imgWidthItemWidthRatio, imgHeightWidthRatio, top, left, rotation, to } = resume;

	const width = `${scale * mainDimension * imgWidthItemWidthRatio}in`;
	const height = `${scale * mainDimension * imgWidthItemWidthRatio * imgHeightWidthRatio}in`;

	return (
		<ItemContainer width={width} height={height} top={top} left={left} rotation={rotation}>
			<Link>
				<Img
					src={imgURL}
					alt=''
				/>
			</Link>
		</ItemContainer>
	);
};

export { DeskItem };