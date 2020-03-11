import React from 'react';
import { GoBackButton } from '../components/GoBackButton';
import styled from 'styled-components';
import { ContentPage } from '../components/bulletJournal/Pages';
import { Journal } from '../components/bulletJournal/Journal';

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
			{<BulletJournal>

				{/* <LeftPaper>
					<p style={{ textAlign: 'right' }}>17:44 03/09/20</p>
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
				</LeftPaper>
				<RightPaper>
					<ul>
						<li>'belong' to a particular render with particular props and state. Howerver, scheduling atimeout whose callback reads this.props breaks that association. Our showMessage callback is not 'tied' to any particular render, and so it 'loses' the correct props. Reading from this severed that connection.</li>
						<li>Let's say function components didn't exist. How would we solve this problem? We'd want to somehow 'repair' the connection between the render with the correct props and the showMessage callback that reads them. Somewhere along the way the props get lost.</li>
						<li>One way to do it would be to read this.props early during the event, and then explicitly pass them through into the timeout completion handler.</li>
						<li>That works. However, this approach makes the code significantly more verbose and error-prone with time. What if we needed more than a single prop? What if we also needed to access the state? If showMessage calls another method, and that method reads this.props.something or this.state.something, we'll have the exact same problem again.</li>
					</ul>
				</RightPaper>
			 */}


			</BulletJournal>}
			<Journal />
			{/* <Page leftPageOrRightPage='leftPage' dotted={false} /> */}
			{/* <DottedPage leftPageOrRightPage='rightPage'></DottedPage> */}
			{/* <ContentPage leftPageOrRightPage='rightPage' /> */}
		</>
	);
}

export { BlogView };