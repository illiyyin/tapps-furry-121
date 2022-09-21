import React from "react";
import { CheckboxItem, CheckboxWrapper } from "../style";
import IconCheck from "../assets/check.svg";
import { IOptions } from "../model";
import { formatNumber } from "../utils";

export default function Options({
	register,
	watch,
	options,
	fieldName,
}: IOptions) {
	const parsedValue = JSON.parse(watch(fieldName) || "{}");
	return (
		<CheckboxWrapper>
			{options.map((item) => (
				<CheckboxItem className="container">
					<input
						type="radio"
						{...register}
						value={`{"label":"${item.label}","value":${
							item.value || null
						}}`}
						checked={parsedValue.label === item.label}
					/>
					<p className="header">{item.label}</p>
					{item.value && (
						<p className="value">
							{formatNumber(item.value)}
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
