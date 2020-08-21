import React from "react"
import Image from "../../image"
import anime from "animejs"
import {
  SlideContent,
  SlideMainContent,
  ImageWrapper,
  Text,
  TextContainer,
  ImagesDeck,
} from "./style"

const Slide2 = ({ active }) => {
  const cardRef = React.useRef(true)
  const deckRef = React.useRef(true)
  const textRef = React.useRef(true)
  const textRef1 = React.useRef(true)
  let deckTl, deckAnimation
  React.useEffect(() => {
    if (active && cardRef.current) {
      deckAnimation = {
        targets: deckRef.current,
        translateX: [-150, 50],
        easing: "easeOutElastic(1,1)",
        duration: 1000,
        autoplay: true,
        direction: "normal",
      }
      deckTl = anime.timeline({
        duration: 1000,
      })
      deckTl
        .add({
          targets: textRef.current,
          delay: 1500,
          opacity: [0, 1],
          easing: "easeOutSine",
          duration: 200,
        })
        .add({
          targets: textRef1.current,
          opacity: [0, 1],
          easing: "easeOutSine",
          duration: 200,
        })
        .add({
          targets: deckRef.current,
          translateX: [-550, 50],
          easing: "easeOutElastic(1,1)",
          duration: 1600,
        })
        .add(
          {
            targets: cardRef.current,
            rotate: [0, 27],
            easing: "linear",
            duration: 500,
          },
          "-=1500"
        )
    }
  }, [active])

  return (
    <SlideContent>
      <SlideMainContent>
        <ImagesDeck ref={deckRef}>
          <ImageWrapper>
            <Image name="jsGod" />
          </ImageWrapper>
          <ImageWrapper ref={cardRef}>
            <Image name="tsGod" />
          </ImageWrapper>
        </ImagesDeck>
        <TextContainer>
          <Text ref={textRef}>
            I assume you may have read too many cover letters and as i know most
            of cover letters could be boring, full of exaggerated statements
            like “+10,000 years of experience in python” or “They call me God of
            Javascript” ... etc.
          </Text>
          <Text ref={textRef1}>
            I decided my cover letter will be realistic, based on my
            <span> True Story </span>, so let me introduce myself.
          </Text>
        </TextContainer>
      </SlideMainContent>
    </SlideContent>
  )
}

export default Slide2
