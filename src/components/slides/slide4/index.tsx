import React from "react"
import anime from "animejs"
import Image from "../../image"
import {
  SlideContent,
  SlideMainContent,
  ImageWrapper,
  TextContainer,
  Text,
} from "./style"
const Slide4 = ({ active }) => {
  const textRef = React.useRef(null)
  const ipadRef = React.useRef(null)

  React.useEffect(() => {
    if (active && textRef.current) {
      const tl = anime.timeline({})
      tl.add({
        targets: textRef.current,
        delay: 1700,
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 300,
      }).add({
        targets: ipadRef.current,
        easing: "easeOutSine",
        translateX: [-1100, 0],
        duration: 600,
      })
    }
  }, [active])

  return (
    <SlideContent>
      <SlideMainContent>
        <ImageWrapper ref={ipadRef}>
          <Image name="team3" />
        </ImageWrapper>
        <TextContainer ref={textRef}>
          <Text>
            I’m currently working as a <span> frontend engineer </span> with a
            great team called “Unplugged” +3.5 years now, in the heart of Cairo,
            a team of 15~20 member, frontend, backend, designers, project
            managers ...etc.
          </Text>
          <Text>
            When I joined Unplugged back in 2017, it was a startup in the early
            stage with a small office, now it’s a reputable medium size company
            in the market of real-estate applications (mobile and web), we’ve
            built many applications for different customers over the middle
            east.
          </Text>
          <Text>
            During this time I worked on different projects as a frontend
            engineer, mentored interns during summer internships to build
            internal tools.
          </Text>
        </TextContainer>
      </SlideMainContent>
    </SlideContent>
  )
}

export default Slide4
