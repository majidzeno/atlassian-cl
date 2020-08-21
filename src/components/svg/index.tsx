import React from "react"
import Whitepoly from "./WhitePoly"

const SvgIcon = (props: any) => {
  switch (props.name) {
    case "whitepoly":
      return <Whitepoly {...props} />
    default:
      return <div />
  }
}

export default SvgIcon
