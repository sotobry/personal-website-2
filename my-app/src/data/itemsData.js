// import resumeURL from './images/resume.png';
// import macbookProURL from './images/macbookpro.png';
// import iPhone8URL from './images/iphones/iphone03.png';
// import journalURL from './images/journals/journal01.png';
// import bookURL from './images/books03.png';
// import newspapersURL from './images/newspaper02.png';

const deskItems = [{
	name: 'resume',
	hoverText: 'Résumé',
	imgURL: resumeURL,
	mainDimension: 11,
	imgWidthItemWidthRatio: 1,
	imgHeightWidthRatio: 8.5 / 11,
	top: 425,
	left: 225,
	rotation: 0,
	to: 'https://docs.google.com/document/d/1jm5jPfQuZBt162ofx8XXAyJs-PEwSBsrE1ncY6Bqp6k/edit'
}, {
	name: "macbookPro",
	hoverText: "Projects",
	imgURL: macbookProURL,
	mainDimension: 14,
	imgWidthItemWidthRatio: 1.239393939,
	imgHeightWidthRatio: 481 / 818,
	top: 20,
	left: 120,
	rotation: 0,
	to: 'projects'
}, {
	name: "books",
	hoverText: "Education",
	imgURL: bookURL,
	mainDimension: 6,
	imgWidthItemWidthRatio: 1.657692308,
	imgHeightWidthRatio: 488 / 431,
	top: -30,
	left: 820,
	rotation: -109,
	to: 'education'
},
{
	name: `newspaper`,
	hoverText: `Coming Soon`,
	imgURL: newspapersURL,
	destination: '#',
	mainDimension: 12,
	imgWidthItemWidthRatio: 1.324731183,
	imgHeightWidthRatio: 533 / 613,
	top: 315,
	left: 675,
	rotation: -15,
	to: '/'
},
{
	name: "journal",
	hoverText: "Coming Soon",
	imgURL: journalURL,
	destination: '#',
	mainDimension: 5.75,
	imgWidthItemWidthRatio: 1.048275862,
	imgHeightWidthRatio: 1132 / 760,
	top: 400,
	left: 975,
	rotation: -10,
	to: '/'
},
{
	name: "iPhone8",
	hoverText: "Contact Me",
	imgURL: iPhone8URL,
	mainDimension: 2.65,
	imgWidthItemWidthRatio: 1.084444444,
	imgHeightWidthRatio: 487 / 244,
	top: 330,
	left: 1250,
	rotation: 0,
	to: 'https://www.linkedin.com/in/bryanns/',
}];

export default deskItems;