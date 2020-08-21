import React from "react"

type SVGType = {
  svgRef: any
  polyRef: any
}
const Whitepoly = React.forwardRef(
  (props: any, ref: { svgRef: any; polyRef: any }) => {
    const { svgRef, polyRef } = ref

    return (
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 2000 1357"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
        }}
        ref={svgRef}
      >
        <polygon
          ref={polyRef}
          style={{
            fill: "#fff",
          }}
          points="476.6,1357 2000,1357 2000,0 1222.1,0"
        />
      </svg>
    )
  }
)

export default Whitepoly
