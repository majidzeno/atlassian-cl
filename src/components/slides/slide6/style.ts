import styled from "styled-components/macro"
import { darkColor } from "../../colors"

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const SlideMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  width: 100vw;
`

export const ImageWrapper = styled.div`
  width: 97%;
`
export const TextContainer = styled.div`
  max-width: 45%;
`
export const Text = styled.p`
  color: ${darkColor};
  font-family: HR;
  span {
    color: black;
    font-weight: 800;
  }
`

export const Note = styled.div`
  font-size: 12px;
  font-family: HM;
  color: black;
  margin-left: 40px;
  a {
    color: black;
  }
`
