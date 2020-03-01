import React from 'react';
import { Link } from 'react-router-dom';
import { EducationData } from '../data/educationData';
import { Paper } from '../styled-components/EducationViewSC';

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
			<Paper scale={0.7}>
				<ul>
					{education}
				</ul>
			</Paper>
		</>
	);
}

export { EducationView };