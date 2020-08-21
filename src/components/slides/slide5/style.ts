/** @format */

import styled from "styled-components/macro";

export const SlideContent = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;
export const SlideMainContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 50px;
	width: 100vw;
`;

export const ImageWrapper = styled.div`
	width: 100%;
`;
export const TextContainer = styled.div`
	max-width: 42%;
`;
export const Text = styled.p`
	color: #000;
	font-family: HR;
	font-size: 16px;
	span {
		color: black;
		font-weight: 800;
	}
`;
