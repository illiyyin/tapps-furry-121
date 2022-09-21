import React from "react";
import BackIcon from "../assets/back.svg";
import { BackWrapper } from "../style";

const dict = {
	finish: "Go to homepage",
	payment: "Back to Delivery",
	delivery:"Back to Cart"
}

export default function Back({ step, getBack }) {
	
	return (
		<BackWrapper onClick={getBack}>
			<img src={BackIcon} />
			<p>{dict[step]}</p>
		</BackWrapper>
	);
}
