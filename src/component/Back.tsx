import React from "react";
import BackIcon from "../assets/back.svg";
import { Dict, IBack } from "../model";
import { BackWrapper } from "../style";

const dict:Dict = {
	finish: "Go to homepage",
	payment: "Back to Delivery",
	delivery:"Back to Cart"
}

export default function Back({ step, getBack }:IBack) {
	
	return (
		<BackWrapper onClick={getBack}>
			<img src={BackIcon} />
			<p>{dict[step]}</p>
		</BackWrapper>
	);
}
