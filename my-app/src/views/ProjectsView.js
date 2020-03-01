import React from 'react';
import { Link } from 'react-router-dom';
import { LASTAppleDevicesData, LASToyotaData } from '../data/projectsData';
import styled from 'styled-components';
// import { zoom } from '../zoom';
import { GraphPaper } from '../components/GraphPaper';

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
		<DeviceGroup>
			<ImgV scale={scale} src={group.imgURL_V} mainDimension={group.mainDimension} alt='' />
			<ImgH scale={scale} src={group.imgURL_H} mainDimension={group.mainDimension} alt='' />
		</DeviceGroup>);

	return (
		<>
			<Link to='/'
				style={{
					fontSize: '3rem',
					// padding: '4rem',
					backgroundColor: 'white',
					position: 'absolute',
					top: 25,
					left: 25,
					display: 'flex',
					width: 50,
					height: 50,
					justifyContent: 'center',
					alignItems: 'center',
					textDecoration: 'none',
					borderRadius: '50%',
					padding: '2.2rem',
					color: 'black'
				}}
			><i class="fas fa-long-arrow-alt-left"></i></Link>
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