import styled from "styled-components/macro"
import { darkColor, darkText } from "../../colors"
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
  position: absolute;
  top: 64%;
  width: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 50% !important;
  color: ${darkColor};
`
export const TextBold = styled.div`
  font-family: HM;
  font-size: 18px;
  height: auto !important;
  span {
    font-weight: 800;
  }
`
export const Text = styled.p`
  padding: 25px 35px 0 35px;
  font-family: HM;
  font-size: 16px;
  span {
    font-weight: 800;
  }
`
export const TextSmall = styled(Text)`
  font-size: 14px;
  color: ${darkText};
  span {
    font-weight: 800;
    text-transform: capitalize;
    color: ${darkColor};
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 70%;
  position: absolute;
  right: 0;
  /* top: -350%; */
  height: 100vh;
  div {
    height: 100%;
  }
  &:first-child {
    position: relative;
    max-width: 25%;
    margin-left: 15%;
    height: auto;
    width: 100%;
    z-index: 1;
  }
`
