import React from "react";
import { StepperItem, StepperWrapper } from "../style";
import IconChevron from "../assets/chevron.svg";

const list = [
	{
		id: 1,
		label: "Delivery",
	},
	{
		id: 2,
		label: "Payment",
	},
	{
		id: 2,
		label: "Finish",
	},
];

export default function Stepper() {
	return (
		<StepperWrapper>
			{list.map((item, index) => (
				<StepperItem>
					<div className="number">
						<p>{item.id}</p>
					</div>
					<div className="label">{item.label}</div>
					{index !== list.length - 1 && <img src={IconChevron} className="chevron-icon"/>}
				</StepperItem>
			))}
		</StepperWrapper>
	);
}
