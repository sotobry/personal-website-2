import styled from 'styled-components';

const ItemContainer = styled.div`
	--text-opacity: 0;
	position: absolute;

	transition: all 0.25s;

	width: ${({ width }) => width};
	height: ${({ height }) => height};
	top: ${({ top }) => top}px;
	left: ${({ left }) => left}px;

	transform: rotate(${({ rotation }) => rotation}deg);

		&:hover {
			--text-opacity: 1;
			transform: scale(1.1) rotate(${({ rotation }) => rotation}deg);
		}

		a, Link {
			width: inherit;
			height: inherit;
			position: inherit;

			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
		}
		
		.resume {
			filter: sepia(0.2);
		}

		.journal {
			filter: brightness(0.9);
		}

		.newspapers + h1 {
			width: 30%;
		}
`;

const Img = styled.img`
	width: inherit;
	position: inherit;
`;

const H1 = styled.h1`  
  font-size: 2.25rem;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-shadow:  1px 1px black, 
                1px -1px black, 
                -1px 1px black, 
                -1px -1px black;

  opacity: var(--text-opacity);
`;

export { ItemContainer, Img, H1 };