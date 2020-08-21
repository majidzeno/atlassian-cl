import styled from "styled-components/macro"
import { darkText } from "../../colors"

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
  max-width: 40%;
`
export const Text = styled.p`
  color: ${darkText};
  font-family: HM;
  font-size: 23px;
  span {
    font-weight: 800;
    color: black;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  transition: 0.2s transform ease-out;
  /* max-width: 25%; */
  &:last-child {
    position: absolute;
    top: 0;
    z-index: -1;
    /* transform: rotate(27deg); */
    transform-origin: bottom right;
  }
  img {
    border-radius: 15px;
  }
`
export const ImagesDeck = styled.div`
  position: relative;
  width: 100%;
  max-width: 25%;
  &:hover {
    ${ImageWrapper} {
      transform: scale(1.1);
    }
  }
`
