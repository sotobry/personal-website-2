import React from 'react';
import { EducationData } from '../data/educationData';
import { Paper } from '../styled-components/EducationViewSC';
import { GoBackButton } from '../components/GoBackButton';


const EducationView = () => {
	const education = EducationData.map(subject =>
		<li>
			<h1>{subject.name}</h1>
			<ul className='courses'>
				{subject.courses.map(course =>
					<li>
						<h2>{course.title} by <i>{course.instructor}</i></h2>
					</li>
				)}
			</ul>
		</li>
	);
	return (
		<>
			<GoBackButton />
			<Paper scale={0.7}>
				<ul>
					{education}
				</ul>
			</Paper>
		</>
	);
}

export { EducationView };