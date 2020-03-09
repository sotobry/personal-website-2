import React from 'react';
import { GoBackButton } from '../components/GoBackButton';
import { BulletJournalPaper } from '../components/BulletJournalPaper';
import styled from 'styled-components';

const BulletJournal = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto auto;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const BlogView = () => {

	return (
		<>
			<GoBackButton />
			<h1>This is the blog section.</h1>
			<BulletJournal>
				<BulletJournalPaper>
					I've been feeling quite stressed lately. I've applied to so many jobs, so many positions, and yet no one has been willing to give me a technichal interview with the exception of Nintendo for a position I was underqualified. I'm almost sure it is because I do not have a bachelor's degree, and because I do not have experience. But I need a bachelor's degree to get experience. I've applied to over 500 positions. Yes, hundreds. And so far just 1 technical interview. That's just crazy to me. I've ran out of my savings. I cannot longer afford to keep living this lifestyle. But I really don't want to go back to customer service related jobs. I hate them so much. They always end up paying me minimum wage even though I have over 5 years of experience in that field. And they look down on me. I hate customer service jobs. I want to do something else. I want to think. I want to create, fix, improve something. I can do so much more than carrying a plate of food to a table, handling money, cleaning toilets. I can do so much more than that. Why does society insists in not giving me a chance?
				</BulletJournalPaper>
				<BulletJournalPaper>
					Page 2.
				</BulletJournalPaper>
			</BulletJournal>
		</>
	);
}

export { BlogView };