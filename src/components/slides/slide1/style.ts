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
	justify-content: center;
	padding: 50px;
	width: 100vw;
	position: relative;
`;
export const ImageWrapper = styled.div`
	width: 100%;
	max-width: 25%;
`;
export const Text = styled.p`
	color: white;
	font-family: CL;
	line-height: normal;
	span {
		display: block;
		font-size: 48px;
		font-weight: 800;
		margin-top: 20px;
		font-family: CB;
	}
	${ImageWrapper} {
		margin-top: 25px;
		max-width: 100%;
	}
`;

export const LogoFont = styled.div`
	font-family: Bask;
	font-size: 2em;
	color: blue;
	display: inline-block;
`;
