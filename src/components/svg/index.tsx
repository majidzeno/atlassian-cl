/** @format */

import React from "react";
import Whitepoly from "./WhitePoly";
import Attlasian_logo from "./Attlasian_logo";

const SvgIcon = (props: any) => {
	switch (props.name) {
		case "whitepoly":
			return <Whitepoly {...props} />;
		case "attlasian":
			return <Attlasian_logo {...props} />;
		default:
			return <div />;
	}
};

export default SvgIcon;
