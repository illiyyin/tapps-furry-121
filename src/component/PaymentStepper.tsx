import React from "react";
import { PaymentContainer, PaymentGrid } from "../style";
import Checkbox from "./Checkbox";
import PageHeader from "./PageHeader";
import TextField from "./TextField";

const optionShipment = [
	{
		label: "GO-SEND",
		value: "15000",
	},
	{
		label: "JNE",
		value: "9000",
	},
	{
		label: "Personal Courier",
		value: "29000",
	},
];
const optionPayment = [
	{
		label: "e-Wallet",
		value: "1500000",
	},
	{
		label: "Bank Transfer",
	},
	{
		label: "Virtual Account",
	},
];
export default function PaymentStepper({ register, errors, watch }) {
	// console.log(watch)

	return (
		<PaymentContainer>
			<div className="payment-item">
				<PageHeader label="Shipment" />
				<PaymentGrid>
					<Checkbox
						register={register("shipment", { required: true })}
						fieldName="shipment"
						watch={watch}
						options={optionShipment}
					/>
				</PaymentGrid>
			</div>
			<div className="payment-item">
				<PageHeader label="Payment" />
				<PaymentGrid>
					<Checkbox
						register={register("payment", { required: true })}
						fieldName="payment"
						watch={watch}
						options={optionPayment}
					/>
				</PaymentGrid>
			</div>
		</PaymentContainer>
	);
}
