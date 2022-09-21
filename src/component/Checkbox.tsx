import React from "react";
import { CheckboxItem, CheckboxWrapper } from "../style";
import IconCheck from "../assets/check.svg";

export default function Checkbox({ register, watch, options, fieldName }) {
	const parsedValue = JSON.parse(watch(fieldName) || "{}");
	console.log(parsedValue);
	return (
		<CheckboxWrapper>
			{options.map((item) => (
				<CheckboxItem className="container">
					<input
						type="radio"
						name="radio"
						{...register}
						value={`{"label":"${item.label}","value":${
							item.value || null
						}}`}
						checked={parsedValue.label === item.label}
					/>
					<p className="header">{item.label}</p>
					{item.value && (
						<p className="value">
							{new Intl.NumberFormat().format(
								parseInt(item.value)
							)}
							{item.label == "e-Wallet" && " left"}
						</p>
					)}
					<span className="checkmark"></span>
					<img src={IconCheck} className="icon-check" />
				</CheckboxItem>
			))}
		</CheckboxWrapper>
	);
}
