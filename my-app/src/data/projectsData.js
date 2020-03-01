import iPhoneSE_V from '../images/LASToyota/iPhoneSE_V.png';
import iPhoneSE_H from '../images/LASToyota/iPhoneSE_H.png';
import iPhone8Plus_V from '../images/LASToyota/iPhone8Plus_V.png';
import iPhone8Plus_H from '../images/LASToyota/iPhone8Plus_H.png';
import iPad_V from '../images/LASToyota/iPad_V.png';
import iPad_H from '../images/LASToyota/iPad_H.png';
import graphPaper from '../images/graphPaper.png'

const LASTAppleDevicesData = [
	{
		mainDimension: 2.31,
		imgURL_V: iPhoneSE_V,
		imgURL_H: iPhoneSE_H
	},
	{
		mainDimension: 3.06,
		imgURL_V: iPhone8Plus_V,
		imgURL_H: iPhone8Plus_H
	},
	{
		mainDimension: 6.8,
		imgURL_V: iPad_V,
		imgURL_H: iPad_H
	}
];

const graphPaperData = {
	width: 8.27,
	height: 11.69,
	imgURL: graphPaper
};

const LASToyotaData = {
	title: 'LAS Toyota Dealership',
	tldr: 'Created content for, designed, developed, and deployed mobile-first responsive website for Toyota dealership struggling to meet sales targets.',
	tech: 'JS, CSS, HTML',
	situation: 'Dealership is struggling to meet sales targets, and owner decides to invest into building a website.',
	endUsersInfo: 'According to the client, most customers are from the lower-middle class. In Puerto Rico, it is uncommon for the lower-middle class to own their own computers. Their main access to the web is through their smart phones. Therefore, a mobile-first responsive approach was taken.',
	highlightSection: [
		{
			header: 'Development and Design',
			highlights: [
				'Utilized mathematical concepts alongside with JS to optimize the website\'s design responsiveness enhancing its aesthetics not just for a few viewports ranges, but for all of them making it look flawless on every device.',
				'Debugged and tested website in different viewports, devices, and browsers.',
				'Currently creating the 4th iteration of the website built in React with improved performance, UI/UX, new features, and a more complex layout to guide users through more detailed product information.'
			]
		},
		{
			header: 'Communication',
			highlights: [
				'Documented code with detailed explanations and maintenance instructions, recorded and prioritized future features and bug fixes, and tracked the project in a Git repository.',
				'Communicated with the client directly with updates on the progress of the website, and discussed the implications of the different design options along with the pros and cons associated with them.',
				'Actively asked for clarification on unclear project requirements and for feedback on design concepts.'
			]
		},
		{
			header: 'Other',
			highlights: [
				'Researched and analyzed the competition deriving from my findings an initial website concept that exceeds theirs.'
			]
		}
	]
};

export { LASTAppleDevicesData, graphPaperData, LASToyotaData };


