/** @format */

import React from "react";
import anime from "animejs";
import Image from "../../image";
import {
	SlideContent,
	SlideMainContent,
	ImageWrapper,
	ImageWithCaption,
	Bold,
	TextContainer,
	Text,
	Caption,
	CommitContainer,
	Commit,
	Signature,
	ImageWithSignature,
	Link,
	Links,
	Name,
	GetInTouch,
	Footer,
} from "./style";
const Slide8 = ({ active }) => {
	const triRef = React.useRef(null);
	const captionRef = React.useRef(null);
	const hyperTextRef = React.useRef(null);
	const textRef1 = React.useRef(null);
	const textRef2 = React.useRef(null);
	const textRef3 = React.useRef(null);
	const textRef4 = React.useRef(null);
	const signatureRef = React.useRef(null);

	React.useEffect(() => {
		if (active && triRef.current) {
			const tl = anime.timeline({});
			tl.add({
				targets: captionRef.current,
				delay: 1700,
				opacity: [0, 1],
				easing: "easeOutSine",
				duration: 500,
			})
				.add({
					targets: hyperTextRef.current,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				})
				.add({
					targets: triRef.current,
					easing: "easeOutSine",
					translateY: [900, 0],
					duration: 600,
				})

				.add({
					targets: textRef1.current,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				})
				.add({
					targets: textRef2.current,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				})
				.add({
					targets: textRef3.current,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				})
				.add({
					targets: textRef4.current,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				})
				.add({
					targets: signatureRef.current,
					delay: 700,
					opacity: [0, 1],
					easing: "easeOutSine",
					duration: 500,
				});
		}
	}, [active]);

	return (
		<SlideContent>
			<SlideMainContent>
				<ImageWithCaption>
					<div ref={captionRef}>
						In 2020, my dream is to join Atlassian as a
						<Bold>frontend engineer</Bold>, <Bold>why ?</Bold>
						<Caption ref={hyperTextRef}>look at this triangle </Caption>
					</div>
					<ImageWrapper ref={triRef}>
						<Image name="triangle" />
					</ImageWrapper>
				</ImageWithCaption>
				<TextContainer>
					<Text ref={textRef1} style={{ color: "#fff" }}>
						Some poeple know how to use the tools right so they
						<span> create</span>, other people who have more skills make a
						creation that <span> inspire </span> others to create, another
						people <span> empower </span>
						others to create , they create tools helping other people to create
						awesome things.
					</Text>
					<Text ref={textRef2} style={{ color: "#fff" }}>
						I want to be one of the people who <span> empower </span>others,this
						is the reason why i want to join <span> Atlassian </span>, i use
						Atlassian every almost daily since 2016, i saw how this product is
						growing and i see some fixes that could enhance the app UX, and i
						really want to be part of the team behind this huge experience.
					</Text>
					<Text ref={textRef3} style={{ color: "#fff" }}>
						I believe this mindset is not a one man show, it is teamwork , when
						you find the right team, the right environment you shine and help
						others to shine, this is the best thing about teamwork, it is
						helping others and this will help you to grow. <br />I would like to
						be part of Atlassian team that shapes this culture everywhere.
					</Text>
					<div ref={textRef4}>
						<Text style={{ color: "#fff" }}>
							In the end I hope that wasn’t too boring for you to read, anyway
							thanks for reading, and i hope to hear from you so soon.
						</Text>
						<CommitContainer>
							<Commit>$ git commit -m “ Cover Letter Sent ” </Commit>
						</CommitContainer>
					</div>
					<Signature ref={signatureRef}>
						<div style={{ color: "#fff" }}>Sincerely,</div>
						<Footer>
							<ImageWithSignature>
								<ImageWrapper>
									<Image name="majidLogo" />
								</ImageWrapper>
								<Links>
									<Name style={{ color: "#fff" }}>Majid Eltayeb</Name>
									<Link>
										<a
											href="https://majideltayeb.com/"
											style={{ color: "#fff" }}>
											majideltayeb.com
										</a>
									</Link>
									<div style={{ color: "#fff" }}>majid.eltayeb@gmail.com</div>
								</Links>
							</ImageWithSignature>
							<GetInTouch>
								<a href="mailto:majid.eltayeb@gmail.com">Get in touch</a>
							</GetInTouch>
						</Footer>
					</Signature>
				</TextContainer>
			</SlideMainContent>
		</SlideContent>
	);
};

export default Slide8;
