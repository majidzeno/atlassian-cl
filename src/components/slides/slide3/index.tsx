/** @format */

import React from "react";
import Image from "../../image";
import anime from "animejs";
import {
	SlideContent,
	SlideMainContent,
	ImageWrapper,
	TextContainer,
	TextBold,
	TextSmall,
	Text,
} from "./style";

const Slide3 = ({ active }) => {
	const mobileRef = React.useRef(null);
	const imgRef = React.useRef(null);
	React.useEffect(() => {
		if (active && mobileRef.current) {
			const tl = anime.timeline({});
			tl.add({
				targets: mobileRef.current,
				easing: "easeOutElastic(5,1)",
				translateY: [1000, 0],
				duration: 1000,
				delay: 500,
			}).add({
				targets: imgRef.current,
				easing: "easeOutSine",
				translateX: [1600, 0],
				duration: 600,
			});
		}
	}, [active]);

	return (
		<SlideContent>
			<SlideMainContent>
				<ImageWrapper ref={mobileRef}>
					<Image name="meInmobile" />
					<TextContainer>
						<TextBold>
							I’m <span>Majid</span>
						</TextBold>
						<Text>
							Frontend Engineer based in <span>Giza,Egypt</span>
						</Text>
						<TextSmall>
							~ 30 mins Driving from <span>the great pyramids</span>
						</TextSmall>
					</TextContainer>
				</ImageWrapper>
				<ImageWrapper ref={imgRef}>
					<Image name="pyramids" />
				</ImageWrapper>
			</SlideMainContent>
		</SlideContent>
	);
};

export default Slide3;
