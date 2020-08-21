import React from "react"
import Image from "../../image"
import anime from "animejs"
import {
  SlideContent,
  SlideMainContent,
  ImageWrapper,
  TextContainer,
  Text,
  Note,
} from "./style"
const Slide7 = ({ active }) => {
  const macbookRef = React.useRef(null)
  const textRef1 = React.useRef(null)
  const textRef2 = React.useRef(null)

  React.useEffect(() => {
    if (active && macbookRef.current) {
      const tl = anime.timeline({})
      tl.add({
        targets: textRef1.current,
        delay: 1700,
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
          targets: macbookRef.current,
          easing: "easeOutSine",
          translateX: [-1100, 0],
          duration: 600,
        })
    }
  }, [active])

  return (
    <SlideContent>
      <SlideMainContent>
        <ImageWrapper ref={macbookRef}>
          <Image name="macbook" />
        </ImageWrapper>
        <TextContainer>
          <Text ref={textRef1}>
            Besides my daily work, i love helping people in any manifestation ,
            back in college i was part of many global student organizations like
            IEEE, Enactus, Aiesec , i like working with different people from
            different backgrounds ,i really got pumped by ideas - not all ideas
            of course, i enjoy answering questions on Stackoverflow , experiment
            libraries and new tricks on Codesandbox and Codepen, read blog posts
            and books, watch tech talks and listen to podcasts, i know i still
            have a lot to absorb.
          </Text>
          <Text ref={textRef2}>
            I enjoy building pixel perfect UIs, CSS for me was the tool that
            fulfilled my love of colors and shaping, i’m an artist by nature, i
            love coloring and customizing things with my hands, it really help
            me use my imagination a lot, and animation too, i made many
            animations with different libraries, sometimes they seem very shaky
            and not professionally done but i’ve done them for experimenting and
            having fun not because of a customer or something.
          </Text>
        </TextContainer>
      </SlideMainContent>
      <Note>
        * This is the landing page of Lexus KSA website which i've built in
        2018, <a href="https://www.lexus.com.sa/">https://www.lexus.com.sa/</a>
      </Note>
    </SlideContent>
  )
}

export default Slide7
