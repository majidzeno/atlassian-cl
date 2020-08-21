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
export const TextContainer = styled.div`
  max-width: 42%;
`
export const Text = styled.p`
  color: ${darkColor};
  font-family: HR;
  font-size: 16px;
  span {
    font-weight: 800;
    text-transform: capitalize;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  div {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 74%;
    height: 60vh;
  }
`
