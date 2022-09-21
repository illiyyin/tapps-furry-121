import React, { useEffect, useState } from "react";
import { IData, IShipingDict } from "../model";
import { SubmitButton, SummaryWrapper } from "../style";
import { formatNumber } from "../utils";

const dictShipping: IShipingDict = {
	"GO-SEND": "today",
	"Personal Courier": "1 day",
	JNE: "2 days",
};

export default function Summary({ step, handler, data }) {
	console.log(step);
	const [parsedData, setParsedData] = useState({} as IData);
	const cost = 500000;
	const dropShipFee = 5900;
	// const obj = { ...data };
	useEffect(() => {
		// console.log(data)
		const obj = { ...data };
		if (data.shipment) {
			obj.shipment = JSON.parse(data.shipment);
		}
		if (data.payment) {
			obj.payment = JSON.parse(data.payment);
		}
		setParsedData(obj);
	}, [data]);

	const handleTotal = () => {
		let total = 0;
		total += cost;
		if (parsedData.dropshipper_name) {
			total += dropShipFee;
		}
		if (parsedData.shipment) {
			total += parsedData.shipment.value;
		}

		return total;
	};
	return (
		<SummaryWrapper>
			<div className="header">
				<h3 className="header-title">Summary</h3>
				<p className="item-purchased">10 items purchased</p>
				{step !== "delivery" && parsedData.shipment && (
					<>
						<hr />
						<p className="delivery-estimation">
							Delivery estimation
						</p>
						<p className="delivery-label">
							{dictShipping[parsedData.shipment?.label]} by{" "}
							{parsedData.shipment?.label}
						</p>
					</>
				)}
				{step === "finish" && parsedData.payment && (
					<>
						<hr />
						<p className="delivery-estimation">Payment method</p>
						<p className="delivery-label">
							{parsedData.payment?.label}
						</p>
					</>
				)}
			</div>
			<div className="footer">
				<div className="cost-item">
					<p className="cost-label">Cost of goods</p>
					<p className="cost-price">{formatNumber(cost)}</p>
				</div>
				{parsedData.dropshipper_name && (
					<div className="cost-item">
						<p className="cost-label">Dropshipping Fee</p>
						<p className="cost-price">
							{formatNumber(dropShipFee)}
						</p>
					</div>
				)}
				{parsedData.shipment && (
					<div className="cost-item">
						<p className="cost-label">
							<span>{parsedData.shipment?.label}</span> shipment
						</p>
						<p className="cost-price">
							{formatNumber(parsedData.shipment?.value)}
						</p>
					</div>
				)}
				<div className="cost-item">
					<p className="cost-price total">Total</p>
					<p className="cost-price total">
						{formatNumber(handleTotal())}
					</p>
				</div>
				{step !== "finish" && (
					<SubmitButton type="submit">
						Pay{" "}
						{parsedData.payment && (
							<span>with {parsedData.payment?.label}</span>
						)}
					</SubmitButton>
				)}
			</div>
		</SummaryWrapper>
	);
}
