import styled, { css } from "styled-components";

export const Contend = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	& h1 {
		font-size: 1.75rem;
		color: var(--pink);
		&:hover {
			color: var(--yellow);
		}
	}
`;

export const HeaderContainer = styled.header`
	justify-content: center;
	align-items: center;
	padding: 1rem;
	height: 4rem;
	background: var(--gray2);
	align-items: center;
`;
