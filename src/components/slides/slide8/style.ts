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

export const ImageWithCaption = styled.div`
  width: 50%;
  height: 63vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: HR;
`
export const Bold = styled.span`
  font-weight: 800;
  margin: 0;
  display: inline-block;
  margin-left: 5px;
  text-transform: capitalize;
`

export const TextContainer = styled.div`
  padding-top: 35px;
  max-width: 50%;
  padding-left: 3%;
  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
`
export const Text = styled.p`
  color: ${darkColor};
  font-family: HR;
  span {
    font-weight: 800;
    text-transform: capitalize;
  }
`
export const Caption = styled.span`
  display: block;
  font-size: 14px;
  margin-top: 20px;
`

export const CommitContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  font-family: HR;
  margin-top: -15px;
`
export const Commit = styled.div`
  background-color: black;
  color: white;
  border-radius: 50px;
  padding: 0 8px;
`
export const Signature = styled.div`
  font-family: HR;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${ImageWrapper} {
    width: 50px;
    margin-right: 15px;
  }
`

export const ImageWithSignature = styled.div`
  margin-top: 1em;
  display: inline-flex;
  margin-bottom: 20px;
`
export const Links = styled.div``
export const Name = styled.div`
  font-weight: bold;
  font-family: HM;
`

export const Link = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
`
export const GetInTouch = styled.div`
  background-color: black;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  a {
    color: white;
    cursor: pointer;
    font-family: CM;
    font-size: 20px;
    text-decoration: none;
  }
`
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`
