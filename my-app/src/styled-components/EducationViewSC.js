import styled from 'styled-components';

const Paper = styled.div`
width: calc(${({ scale }) => scale * 8.5}in);
height: calc(${({ scale }) => scale * 11}in);

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;

margin: auto;
padding: calc(${({ scale }) => scale * 0.5}in);

background-color: white;

	ul, li {
		list-style-type: none;
	}

	& > ul {
		height: calc(${({ scale }) => scale * 10}in);
		width: calc(${({ scale }) => scale * 3.75}in);
		
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	h1, .courses, .courses li {
		margin-bottom: 20px;
	}

	.courses li {
		margin-right: calc(${({ scale }) => scale * 0.5}in);
		margin-left: calc(${({ scale }) => scale * 0.25}in);
	}

	h2, h3 {
		font-weight: normal;
	}

	h1 { font-size: 20px; }
	h2 { font-size: 14px; }
	h3 { font-size: 12px; }
`;

export { Paper };