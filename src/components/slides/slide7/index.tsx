import React from "react"
import Image from "../../image"
import anime from "animejs"
import {
  SlideContent,
  SlideMainContent,
  ImageWrapper,
  TextContainer,
  Text,
} from "./style"
const Slide7 = ({ active }) => {
  const ipadRef = React.useRef(null)
  const textRef1 = React.useRef(null)
  const textRef2 = React.useRef(null)
  const textRef3 = React.useRef(null)

  React.useEffect(() => {
    if (active && ipadRef.current) {
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
          targets: textRef3.current,
          opacity: [0, 1],
          easing: "easeOutSine",
          duration: 500,
        })
        .add({
          targets: ipadRef.current,
          easing: "easeOutSine",
          translateX: [-900, 0],
          duration: 600,
        })
    }
  }, [active])

  return (
    <SlideContent>
      <SlideMainContent>
        <ImageWrapper ref={ipadRef}>
          <Image name="teamboard" />
        </ImageWrapper>
        <TextContainer>
          <Text ref={textRef1}>
            When it comes to software development it is a great tool , and with
            great power comes great responsibility , i like building real,
            useful, inspiring products that really help others and make their
            daily life easier, i live here in a third world country where
            technology is not widely used like other countries, i hope i can
            make difference, i like my products to be a response for a cause or
            a problem.
          </Text>
          <Text ref={textRef2}>
            A friend of mine just lost her job as an interior designer before
            the COVID-19 epidemic, one of the causes is that her company was a
            small team with no experience in management , they were handling
            their daily logs manually and for that reason they missed up her
            vacations, they couldn’t track her performance well, they were
            totally unorganized small team with big hopes and they ended up
            shutting down their business after the epidemic.
          </Text>
          <Text ref={textRef3}>
            I respond to that with an open source management tool to organize
            teams, called <span>TeamBoard</span> it is still a small project but
            i’m working on it in my free time these days to explore new
            libraries , and to offer a good solution for teams - especially for
            small teams who could not afford high paying management software
            subscription.
            <br />
            You may check it out
            <a href="https://teamboard.netlify.app">here.</a>
          </Text>
        </TextContainer>
      </SlideMainContent>
    </SlideContent>
  )
}

export default Slide7
