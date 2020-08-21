/** @format */

import React from "react";
import {
	SliderWrapper,
	SlideWrapper,
	StyledSlider,
	SliderControls,
	Btn,
	Ribbon,
} from "./styles";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import Slide8 from "./slides/slide8";
import anime from "animejs";
import Whitepoly from "./svg/WhitePoly";

const CLSlider = (props: any) => {
	const svgRef = React.useRef(null);
	const polyRef = React.useRef(null);
	const ribbonRef = React.useRef(null);

	const [activeAnimation, setActiveAnimation] = React.useState(0);
	const sliderRef = React.useRef(null);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		fade: true,
		accessibility: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		beforeChange: (i1, i2) => {
			setActiveAnimation(i2);
		},
	};

	const keyStrokFunction = React.useCallback((event) => {
		if (event.keyCode === 39) {
			nextSlide();
		}
		if (event.keyCode === 37) {
			prevSlide();
		}
	}, []);

	React.useEffect(() => {
		document.addEventListener("keydown", keyStrokFunction, false);
		return () => {
			document.removeEventListener("keydown", keyStrokFunction, false);
		};
	}, []);

	React.useEffect(() => {
		if (svgRef.current) {
			let introTl = anime.timeline({});
			if (activeAnimation === 0) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-100, -100],
					})
					.add({
						targets: svgRef.current,
						translateX: [1300, 1300],
					});
			}
			if (activeAnimation === 1) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [1300, 0],
						easing: "easeOutQuad",
						duration: 1200,
					});
			}
			if (activeAnimation === 2) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [1300, 1300],
						easing: "easeOutQuad",
						duration: 1200,
					})
					.add({
						targets: polyRef.current,
						points: [
							{
								value: [
									"476.6 1357 2000 1357 2000 0 1222.1 0",
									"476.6 1357 2000 1357 2000 0 1222.1 0",
								],
							},
						],
						easing: "easeOutQuad",
						duration: 1200,
					});
			}
			if (activeAnimation === 3) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [1300, 0],
						easing: "easeOutQuad",
						duration: 1200,
					})
					.add({
						targets: polyRef.current,
						points: [
							{
								value: [
									"476.6 1357 2000 1357 2000 0 1222.1 0",
									"476.6 1357 2000 1357 2000 0 1222.1 0",
								],
							},
						],
						easing: "easeOutQuad",
						duration: 1200,
					});
			}
			if (activeAnimation === 4) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [-1300, 0],
						easing: "easeOutQuad",
						duration: 1200,
					})
					.add(
						{
							targets: polyRef.current,
							points: [
								{
									value: [
										"476.6 1357 2000 1357 2000 0 1100 0",
										"0 1357 714.8 1357 1109.1 0 0 0",
									],
								},
							],
							easing: "easeOutQuad",
							duration: 1200,
							loop: true,
						},
						"-=2100"
					);
			}
			if (activeAnimation === 5) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [1300, 0],
						easing: "easeOutQuad",
						duration: 1200,
					})
					.add({
						targets: polyRef.current,
						points: [
							{
								value: [
									"476.6 1357 2000 1357 2000 0 1100 0",
									"476.6 1357 2000 1357 2000 0 1100 0",
								],
							},
						],
						easing: "easeOutQuad",
						duration: 1200,
					});
			}
			if (activeAnimation === 6) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [1300, 0],
						easing: "easeOutQuad",
						duration: 1200,
					})
					.add({
						targets: polyRef.current,
						points: [
							{
								value: [
									"476.6 1357 2000 1357 2000 0 1100 0",
									"476.6 1357 2000 1357 2000 0 1100 0",
								],
							},
						],
						easing: "easeOutQuad",
						duration: 1200,
					});
			}
			if (activeAnimation === 7) {
				introTl
					.add({
						targets: ribbonRef.current,
						translateX: [-350, 0],
						easing: "easeOutQuad",
						duration: 500,
					})
					.add({
						targets: svgRef.current,
						translateX: [-1300, 0],
						easing: "easeOutQuad",
						duration: 1200,
					})
					.add(
						{
							targets: polyRef.current,
							points: [
								{
									value: [
										"476.6 1357 2000 1357 2000 0 1100 0",
										"0 1357 1000 1357 1000 0 0 0",
									],
								},
							],
							easing: "easeOutQuad",
							duration: 1200,
							loop: true,
						},
						"-=2100"
					);
			}
		}
	}, [activeAnimation, svgRef.current]);
	const ribbonContent = () => {
		switch (activeAnimation) {
			case 1:
				return "$ git init";
			case 2:
				return "$ git status";
			case 3:
				return "$ git status ~ 2 ";
			case 4:
				return "$ git log";
			case 5:
				return "$ git log ~ 2";
			case 6:
				return "$ git log ~ 3";
			case 7:
				return "$ git add quora";
			default:
				return null;
		}
	};
	const nextSlide = () => {
		sliderRef.current.slickNext();
	};
	const prevSlide = () => {
		sliderRef.current.slickPrev();
	};
	return (
		<SliderWrapper>
			<Whitepoly ref={{ svgRef, polyRef }} />
			<Ribbon ref={ribbonRef}>{ribbonContent()}</Ribbon>
			<StyledSlider ref={sliderRef} {...settings}>
				<SlideWrapper>
					<Slide1 active={activeAnimation === 0} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide2 active={activeAnimation === 1} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide3 active={activeAnimation === 2} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide4 active={activeAnimation === 3} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide5 active={activeAnimation === 4} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide6 active={activeAnimation === 5} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide7 active={activeAnimation === 6} />
				</SlideWrapper>
				<SlideWrapper>
					<Slide8 active={activeAnimation === 7} />
				</SlideWrapper>
			</StyledSlider>
			{activeAnimation === 0 ? (
				<SliderControls style={{ justifyContent: "flex-end" }}>
					<Btn onClick={() => nextSlide()}>Continue ... </Btn>
				</SliderControls>
			) : activeAnimation === 7 ? (
				<SliderControls>
					<Btn onClick={() => prevSlide()}>Back </Btn>
				</SliderControls>
			) : (
				<SliderControls>
					<Btn onClick={() => prevSlide()}>Back </Btn>
					<Btn onClick={() => nextSlide()}>Continue ... </Btn>
				</SliderControls>
			)}
		</SliderWrapper>
	);
};

export default CLSlider;
