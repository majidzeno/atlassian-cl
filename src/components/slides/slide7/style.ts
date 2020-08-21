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
  width: 30%;
`
export const TextContainer = styled.div`
  max-width: 45%;
`
export const Text = styled.p`
  color: ${darkColor};
  font-family: HR;
  a {
    margin-left: 5px;
    font-weight: bold;
  }
  span {
    font-weight: bold;
  }
`
