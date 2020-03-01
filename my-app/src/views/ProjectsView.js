import React from 'react';
import { Link } from 'react-router-dom';
import { LASTAppleDevicesData, graphPaperData } from '../data/projectsData';
import styled from 'styled-components';

const DeviceGroups = styled.div`
	width: 100vw;
	height: 100vh;

	position: absolute;
	top: 0;

	display: flex;
	justify-content: flex-end;
	align-items: center;

	padding: 100px;
	z-index: -1;
`;

const DeviceGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&:nth-child(odd) {
		flex-direction: column-reverse;
	}

	img {
		margin: 10px -15px;
	}
`;

const ImgV = styled.img`
	width: ${({ mainDimension, scale }) => scale * mainDimension}in;
	`;

const ImgH = styled.img`
	height: ${({ mainDimension, scale }) => scale * mainDimension}in;
	`;

const GraphPaper = styled.div`
	width: ${({ data: { width }, scale }) => scale * width}in;
	height: ${ ({ data: { height }, scale }) => scale * height}in;

	background-image: url(${({ data: { imgURL } }) => imgURL});
	background-size: contain;

	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: 150px;
`;

const ProjectsView = (props) => {
	const { scale } = props;
	const LASTAppleDeviceGroupComponents = LASTAppleDevicesData.map(group =>
		<DeviceGroup>
			<ImgV scale={scale} src={group.imgURL_V} mainDimension={group.mainDimension} alt='' />
			<ImgH scale={scale} src={group.imgURL_H} mainDimension={group.mainDimension} alt='' />
		</DeviceGroup>);

	return (
		<>
			<Link to='/'>GO BACK</Link>
			<GraphPaper
				scale={scale}
				data={graphPaperData}
			></GraphPaper>
			<DeviceGroups>
				{LASTAppleDeviceGroupComponents}
			</DeviceGroups>
		</>
	);
}

export { ProjectsView };