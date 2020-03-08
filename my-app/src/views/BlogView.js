import React from 'react';
import { GoBackButton } from '../components/GoBackButton';
import { BulletJournalPaper } from '../components/BulletJournalPaper';


const BlogView = () => {

	return (
		<>
			<GoBackButton />
			<h1>This is the blog section.</h1>
			<div className='journal'>
				<div className='leftPage'><h2>Left Page</h2></div>
				<div className='rightPage'><h2>Right Page</h2></div>
				<BulletJournalPaper />
			</div>
		</>
	);
}

export { BlogView };