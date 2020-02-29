import React from 'react';
import { Link } from 'react-router-dom';
import { ItemContainer, Img, H1 } from '../styled-components/HomeViewSC'

const DeskItem = props => {
	const { scale, data } = props;
	const { name, hoverText, imgURL, mainDimension, imgWidthItemWidthRatio, imgHeightWidthRatio, top, left, rotation, to } = data;

	const width = `${scale * mainDimension * imgWidthItemWidthRatio}in`;
	const height = `${scale * mainDimension * imgWidthItemWidthRatio * imgHeightWidthRatio}in`;
	console.log(to.indexOf('http') !== -1);

	const itemImgC =
		<Img
			className={name}
			src={imgURL}
			alt=''
		/>;
	const itemTextC = <H1 style={{ transform: `rotate(${-rotation}deg)` }}>{hoverText}</H1>;

	return (
		<ItemContainer width={width} height={height} top={top} left={left} rotation={rotation}>
			{to.indexOf('http') !== -1 ?
				<a
					href={to}
					target='_blank'
					rel="noopener noreferrer"
					width={width} height={height} top={top} left={left} rotation={rotation}
				>
					{itemImgC}
					{itemTextC}
				</a> :
				<Link to={to}>
					{itemImgC}
					{itemTextC}
				</Link>
			}
		</ItemContainer >
	);
};

export { DeskItem };