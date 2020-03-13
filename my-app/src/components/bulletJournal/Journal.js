import React, { useState } from 'react';
import styled from 'styled-components';
import { Page, DottedPage, ContentPage } from './Pages';

const JournalSC = styled.div`
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

const journalData = [
	{
		id: 0,
		leftSide: {
			type: 'blank',
		},
		rightSide: {
			type: 'content',
			data: [
				{
					startingPage: null,
					pagesText: '2-3',
					topic: 'Future Log'
				},
				{
					startingPage: null,
					pagesText: '4-7',
					topic: 'December'
				},
				{
					startingPage: null,
					pagesText: '249',
					topic: 'Possible collections'
				},
				{
					startingPage: null,
					pagesText: '248',
					topic: 'To-buy list'
				},
				{
					startingPage: null,
					pagesText: '246-7',
					topic: 'The Bullet Journal Method book notes'
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
			]
		}
	},
	{
		id: 1,
		leftSide: {
			type: 'content',
			data: [
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
			]
		},
		rightSide: {
			type: 'content',
			data: [
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
				{
					startingPage: null,
					pagesText: '',
					topic: ''
				},
			]
		}
	},
	{
		id: 2,
		leftSide: {
			type: 'blank',
		},
		rightSide: {
			type: 'dotted',
			pageNum: 1
		}
	},
	{
		id: 3,
		leftSide: {
			type: 'dotted',
			pageNum: 2,
			text: <><p style={{ textAlign: 'right' }}>17:44 03/09/20</p>
				<h1 style={{ fontFamily: 'Permanent Marker', fontSize: 16, textAlign: 'center', margin: '10px 0' }}>Notes on Dan Abramov's article about the difference b/w function and class components</h1>

				<ul>
					<li>For a while, the canonical answer to this question has been that classes provide access to more features like state, but with Hooks, that's not true anymore.</li>
					<li>Though most likely when recruiters ask this question, me saying that classes provide state will most likely be an acceptable answer given that rarely will they be up-to-date with the latest technologies, I should give then an actual technical correct answer so that they see that 1) I'm up-to-date with the latest features, and 2) some of them might be impressed.</li>
					<li>Hooks are still new, and some 'best practices' haven't yet found their way into the tutorials</li>
					<li>The biggest difference between them is that function components capture the rendered values.</li>
					<li>It is common to think these two snippets of code are equivalent. People often freely refactor between these patterns without noticing their implications. However, these two snippets of code are subtly different.</li>
					<li>Disclaimer: this difference has nothing to do with React Hooks.</li>
					<li>This class method reads from this.props.user. Props are immutable in React so they can never change. Howerver, this is, and has always been, mutable. Indeed, that's the whole purpose of this in a class. React itself mutates it over time so that you can read the fresh version in the render and lifecycle methods. So if our component re-renders while the request is in flight, this.props will change, The showMessage method reads the user from the 'too new' props.</li>
					<li>This exposes an interesting observation about the nature of user interfaces. If we say that a UI is conceptually a function of current application state, the event handlers are a part of the render result - just like the visual output. Our event handlers</li>
				</ul>
			</>
		},
		rightSide: {
			type: 'dotted',
			pageNum: 3,
			text: <>
				<ul>
					<li>'belong' to a particular render with particular props and state. Howerver, scheduling atimeout whose callback reads this.props breaks that association. Our showMessage callback is not 'tied' to any particular render, and so it 'loses' the correct props. Reading from this severed that connection.</li>
					<li>Let's say function components didn't exist. How would we solve this problem? We'd want to somehow 'repair' the connection between the render with the correct props and the showMessage callback that reads them. Somewhere along the way the props get lost.</li>
					<li>One way to do it would be to read this.props early during the event, and then explicitly pass them through into the timeout completion handler.</li>
					<li>That works. However, this approach makes the code significantly more verbose and error-prone with time. What if we needed more than a single prop? What if we also needed to access the state? If showMessage calls another method, and that method reads this.props.something or this.state.something, we'll have the exact same problem again.</li>
				</ul>
			</>
		}
	},
	{
		id: 4,
		leftSide: {
			type: 'dotted',
			pageNum: 4
		},
		rightSide: {
			type: 'dotted',
			pageNum: 5
		}
	},
	{
		id: 5,
		leftSide: {
			type: 'dotted',
			pageNum: 6
		},
		rightSide: {
			type: 'dotted',
			pageNum: 7
		}
	}
];

const Journal = () => {
	const [pages, setPages] = useState(journalData[0]);
	console.log(pages.leftSide);
	const { leftSide, rightSide } = pages;

	const turnPageToRight = () => {
		setPages(prevPages => prevPages.id < journalData.length - 1 ?
			journalData[prevPages.id + 1] :
			prevPages);
		console.log('turning right');
	};

	const turnPageToLeft = () => {
		setPages(prevPages => prevPages.id > 0 ?
			journalData[prevPages.id - 1] :
			prevPages);
		console.log('turning left');
	};

	let LeftPage, RightPage;

	if (leftSide.type === 'blank') LeftPage =
		props =>
			<Page side='left'>
				{props.children}
			</Page>;
	else if (leftSide.type === 'content') LeftPage =
		(props) =>
			<ContentPage side='left' data={leftSide.data}></ContentPage>;
	else if (leftSide.type === 'dotted') LeftPage =
		props =>
			<DottedPage side='left' pageNum={leftSide.pageNum}>{leftSide.text}</DottedPage>;


	if (rightSide.type === 'blank') RightPage = () =>
		<Page side='right' />;
	if (rightSide.type === 'content') RightPage = () =>
		<ContentPage side='right' data={rightSide.data} />;
	else if (rightSide.type === 'dotted') RightPage = () =>
		<DottedPage side='right' pageNum={rightSide.pageNum}>{rightSide.text}</DottedPage>;

	const ArrowSC = styled.i`
		font-size: 100px;
		color: white;
		margin: 50px;
		transition-duration: 250ms;
		&:hover {
			transform: scale(1.2);
		}
	`;
	const LeftArrow = () =>
		<ArrowSC className="fas fa-angle-left" onClick={turnPageToLeft} />;
	const RightArrow = () =>
		<ArrowSC className="fas fa-angle-right" onClick={turnPageToRight} />;
	return (
		<JournalSC>
			<LeftArrow />
			<LeftPage></LeftPage>
			<RightPage /><RightArrow />
		</JournalSC>
	);
};

export { Journal };