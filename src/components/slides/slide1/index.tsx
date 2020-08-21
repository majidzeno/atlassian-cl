/** @format */

import React from "react";
import anime from "animejs";
import Image from "../../image";
import {
	SlideContent,
	SlideMainContent,
	ImageWrapper,
	Text,
	LogoFont,
} from "./style";

const Slide1 = ({ active }) => {
	const ref = React.useRef(true);
	React.useEffect(() => {
		const animation = anime({
			targets: ref.current,
			translateY: [0, -10],
			easing: "easeInOutSine",
			duration: 1000,
			autoplay: true,
			direction: "alternate",
		});
	}, [active]);

	return (
		<SlideContent>
			<SlideMainContent>
				<ImageWrapper ref={ref}>
					<Image name="greenmobile" />
				</ImageWrapper>
				<Text>
					Hello Quora team, This is
					<span>
						Why I want <br />
						to join
					</span>
					<ImageWrapper>
						<Image name="quoraLogo" />
					</ImageWrapper>
				</Text>
			</SlideMainContent>
		</SlideContent>
	);
};

export default Slide1;
