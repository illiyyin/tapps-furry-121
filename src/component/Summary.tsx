import { useEffect, useState } from "react";
import { IData,  ISummary } from "../model";
import { SubmitButton, SummaryWrapper } from "../style";
import { dictShipping, formatNumber } from "../utils";



export default function Summary({ step, error, data }: ISummary) {
	const [parsedData, setParsedData] = useState({} as IData);
	const cost = 500000;
	const dropShipFee = 5900;
	useEffect(() => {
		if (data) {
			const obj = { ...data };
			if (typeof data?.shipment == "string") {
				obj.shipment = JSON.parse(data.shipment);
			}
			if (typeof data?.payment == "string") {
				obj.payment = JSON.parse(data.payment);
			}
			setParsedData(obj);
		}
	}, [data]);

	const handleTotal = () => {
		let total = 0;
		total += cost;
		if (parsedData.dropshipper_name) {
			total += dropShipFee;
		}
		if (parsedData.shipment?.value) {
			total += parsedData.shipment.value;
		}

		return total;
	};
	const handleButtonText = () => {
		if (step == "delivery") return "Continue to Payment";
		if (step == "payment" && parsedData.payment)
			return `Pay with ${parsedData.payment?.label}`;
		return "Pay";
	};

	const isDisabled = () => {
		if (Object.keys(error).length == 0) return false;
		return true;
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
							{parsedData.shipment?.value &&
								formatNumber(parsedData.shipment?.value)}
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
					<SubmitButton type="submit" disabled={isDisabled()}>
						{handleButtonText()}
					</SubmitButton>
				)}
			</div>
		</SummaryWrapper>
	);
}
