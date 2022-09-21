import React from "react";
import { IPayment } from "../model";
import { PaymentContainer, PaymentGrid } from "../style";
import Options from "./Options";
import PageHeader from "./PageHeader";

const optionShipment = [
	{
		label: "GO-SEND",
		value: 15000,
	},
	{
		label: "JNE",
		value: 9000,
	},
	{
		label: "Personal Courier",
		value: 29000,
	},
];
const optionPayment = [
	{
		label: "e-Wallet",
		value: 1500000,
	},
	{
		label: "Bank Transfer",
	},
	{
		label: "Virtual Account",
	},
];
export default function PaymentStepper({ register, errors, watch }:IPayment) {

	return (
		<PaymentContainer>
			<div className="payment-item">
				<PageHeader label="Shipment" />
				<PaymentGrid>
					<Options
						register={register("shipment", { required: true })}
						fieldName="shipment"
						watch={watch}
						options={optionShipment}
					/>
				</PaymentGrid>
				{errors.shipment && (
					<p className="error">Please choose shipment</p>
				)}
			</div>
			<div className="payment-item">
				<PageHeader label="Payment" />
				<PaymentGrid>
					<Options
						register={register("payment", { required: true })}
						fieldName="payment"
						watch={watch}
						options={optionPayment}
					/>
				</PaymentGrid>
				{errors.payment && (
					<p className="error">Please choose payment</p>
				)}
			</div>
		</PaymentContainer>
	);
}
