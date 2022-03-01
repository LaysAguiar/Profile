import styled, { css } from "styled-components";

export const Contend = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	align-items: center;
	padding: 2rem;
	height: 100vh;
	background: var(--gray);
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding-left: 6rem;
	align-items: start;

	& h1 {
		margin-bottom: 8px;
		font-size: 3.75rem;
		color: var(--white);
	}
	& span {
		margin-bottom: 8px;
		font-size: 3.75rem;
		color: var(--pink);
		&:hover {
			color: var(--yellow);
		}
	}

	& p {
		padding-top: 2rem;
		padding-bottom: 2rem;
		font-size: 1.25rem;
		color: var(--white);
	}
`;

export const Button = styled.button`
	display: flex;
	margin-top: 6rem;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	height: 50px;
	border: none;
	border-radius: 2px;
	background: var(--pink);
	color: var(--white);
	font-size: 1rem;

	&:hover {
		background: var(--yellow);
	}
`;
