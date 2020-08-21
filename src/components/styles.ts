/** @format */

import styled from "styled-components/macro";
import Slider from "react-slick";

const darkColor = "#0E1E25";
const backgroundGradient =
	"linear-gradient(102.81deg, rgba(0, 199, 183, 0) -4.75%, #DF6C68 73.05%), #A82824";

export const SliderWrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: ${backgroundGradient};
	overflow: hidden;
	position: relative;
`;
export const SlideWrapper = styled.div`
	display: flex !important;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
export const StyledSlider = styled(Slider)`
	height: 100%;
`;

export const Btn = styled.button`
	align-self: flex-end;
	color: white;
	font-family: HM;
	font-size: 16px;
	padding: 6px 58px;
	background: ${darkColor};
	border-radius: 8px;
	border: none;
	cursor: pointer;
`;

export const SliderControls = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 25px;
	position: absolute;
	width: 100%;
	bottom: 0px;
	padding-bottom: 20px;
`;

export const Ribbon = styled.div`
	position: absolute;
	font-size: 36px;
	font-family: CB;
	display: inline-block;
	height: 50px;
	line-height: 50px;
	padding-left: 40px;
	padding-right: 20px;
	left: -8px;
	top: 20px;
	color: white;
	background-color: black;
	&:after {
		content: "";
		position: absolute;
		top: 0;
		height: 0;
		width: 0;
		right: -14.5px;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;
		border-left: 15px solid black;
	}
`;
