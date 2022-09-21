import React, { useEffect, useState } from "react";
import { IData, IFinish } from "../model";
import { FinishContainer } from "../style";
import { dictShipping, getRandomId } from "../utils";
import Back from "./Back";
import PageHeader from "./PageHeader";

export default function FinishStep({ data,handleReset }: IFinish) {
	const [parsedData, setParsedData] = useState({} as IData);
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
	return (
		<FinishContainer>
			<div className="content">
				<PageHeader label="Thank you" />
				<p className="order-id">Order ID : {getRandomId()}</p>
				<p className="order-action">
					Your order will be delivered{" "}
					{dictShipping[parsedData.shipment?.label]} with{" "}
					{parsedData.shipment?.label}
				</p>
				<Back step="finish" getBack={handleReset} />
			</div>
		</FinishContainer>
	);
}
