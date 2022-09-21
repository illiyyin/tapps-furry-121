import React from "react";
import { FinishContainer } from "../style";
import Back from "./Back";
import PageHeader from "./PageHeader";

export default function FinishStep() {
	return (
		<FinishContainer>
			<div className="content">
        <PageHeader label="Thank you" />
        <p className="order-id">Order ID : XXKYB</p>
        <p className="order-id">Your order will be delivered today with GO-SEND</p>
        <Back step="finish"/>
			</div>
		</FinishContainer>
	);
}
