import React from 'react';
import { Link } from 'react-router-dom';
import { LASTAppleDevicesData } from '../data/projectsData';

const ProjectsView = (props) => {
	const { scale } = props;
	const LASTAppleDeviceGroupComponents = LASTAppleDevicesData.map(group =>
		<div className='deviceGroup'>
			<img src={group.imgURL_V} alt='' style={{ width: `${group.mainDimension * scale}in` }} />
			<img src={group.imgURL_H} alt='' style={{ height: `${group.mainDimension * scale}in` }} />
		</div>);

	return (
		<>
			<Link to='/'>GO BACK</Link>
			<h1>Projects</h1>
			{LASTAppleDeviceGroupComponents}
		</>
	);
}

export { ProjectsView };