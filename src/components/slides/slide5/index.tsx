/** @format */

import React from "react";
import anime from "animejs";
import Image from "../../image";
import {
	SlideContent,
	SlideMainContent,
	ImageWrapper,
	TextContainer,
	Text,
} from "./style";
const Slide5 = ({ active }) => {
	const macbookRef = React.useRef(null);
	const textRef1 = React.useRef(null);
	const textRef2 = React.useRef(null);

	React.useEffect(() => {
		if (active && macbookRef.current) {
			const tl = anime.timeline({});
			tl.add({
				targets: textRef1.current,
				delay: 1700,
				opacity: [0, 1],
				easing: "easeOutSine",
				duration: 500,
			})
				.add({
					targets: textRef2.current,
					// delay: 1700,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				})
				.add({
					targets: macbookRef.current,
					easing: "easeOutSine",
					translateY: [1100, 0],
					duration: 600,
				});
		}
	}, [active]);

	return (
		<SlideContent>
			<SlideMainContent>
				<ImageWrapper ref={macbookRef}>
					<Image name="almakinah" />
				</ImageWrapper>
				<TextContainer>
					<Text ref={textRef1} style={{ color: "#fff" }}>
						I’ve started my journey as a frontend engineer back in 2016 right
						after joining <span style={{ color: "#fff" }}> Novartis </span>, i
						found after a while i’m making a career suicide by sticking into a
						Mega Size company as a fresh grad, i was imagining myself setting in
						the line waiting for the big boss to hand the validation tickets for
						everyone, and i’m the end of this line, far away from the C-Level so
						i can make decisions that i think it could make a difference from
						any level, I’m the fresh grad who have to listen and do the tasks
						without asking too many questions,but this is doesn’t work for me, i
						decided to quit, which wasn’t an easy decision back then, I’ve been
						a fresh grad with almost no experience and decided to leave a
						multinational company with a very good salary to join a startup and
						follow my dreams .
					</Text>
					<Text ref={textRef2} style={{ color: "#fff" }}>
						They say “Luck is what happens when opportunity meets preparation”,
						In the same time i was planning to leave Novartis, a message came to
						me about a bootcamp called
						<span style={{ color: "#fff" }}> “Almakinah” </span>to learn
						fundamentals of programming,and i was just prepared to learn
						anything that gives me the freedom i was asking for, i’m an artist
						by nature, i love math and solving hardcore problems , i like
						hitting my head to the walls and talking to my cat about something i
						can’t figure out, i’m not the guy who loves to wait for permissions
						to express his ideas that empowers people, i found all these things
						in frontend and finally for the first time i found the thing that i
						can do for hours and hours without being bored.
					</Text>
				</TextContainer>
			</SlideMainContent>
		</SlideContent>
	);
};

export default Slide5;
