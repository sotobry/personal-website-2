import React from 'react';
import { LASTAppleDevicesData, LASToyotaData } from '../data/projectsData';
import styled from 'styled-components';
import { GraphPaper } from '../components/GraphPaper';
import { GoBackButton } from '../components/GoBackButton';

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

const ProjectsView = (props) => {
	const { scale } = props;
	const LASTAppleDeviceGroupComponents = LASTAppleDevicesData.map(group =>
		<DeviceGroup >
			<ImgV scale={scale} src={group.imgURL_V} mainDimension={group.mainDimension} alt='' />
			<ImgH scale={scale} src={group.imgURL_H} mainDimension={group.mainDimension} alt='' />
		</DeviceGroup>);

	return (
		<>
			<GoBackButton />
			<GraphPaper
				scale={0.4}
				data={LASToyotaData} />
			<DeviceGroups>
				{LASTAppleDeviceGroupComponents}
			</DeviceGroups>
		</>
	);
}

export { ProjectsView };