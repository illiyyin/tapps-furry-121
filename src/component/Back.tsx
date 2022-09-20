import React from "react";
import BackIcon from "../assets/back.svg";
import { BackWrapper } from "../style";

export default function Back() {
	return (
		<BackWrapper>
			<img src={BackIcon} />
			<p>Back to cart</p>
		</BackWrapper>
	);
}
