import React, { useState } from "react";
import { DeliveryContainer, DeliveryGrid } from "../style";
import PageHeader from "./PageHeader";
import TextField from "./TextField";
import IconCheck from "../assets/check.svg";
import { IDelivery } from "../model";

export default function DeliveryStepper({
	register,
	errors,
	watch,
	setValue,
	clearError,
}: IDelivery) {
	const [isDropShipper, setIsDropShipper] = useState(false);
	return (
		<DeliveryContainer>
			<div className="header">
				<PageHeader label="Delivery details" />
				<label className="checkbox">
					<input
						type={"checkbox"}
						checked={isDropShipper}
						onChange={(e) => {
							if (e.target.checked)
								setValue("dropshipper_name", "");
							setIsDropShipper(e.target.checked);
							clearError("dropshipper_name");
							clearError("dropshipper_phone_number");
						}}
					/>
					<img src={IconCheck} className="icon-check" />
					<span className="checkmark"></span>
					Send as Dropshipper
				</label>
			</div>

			<DeliveryGrid>
				<TextField
					type={"email"}
					label="Email"
					fieldName="email"
					register={register("email", {
						required: true,
						pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
					})}
					error={errors}
					watcher={watch("email")}
				/>
				<TextField
					disabled={!isDropShipper}
					className="dropship"
					label="Dropshipper Name"
					fieldName="dropshipper_name"
					register={register("dropshipper_name", {
						required: isDropShipper,

						minLength: 3,
						maxLength: 20,
					})}
					error={errors}
					watcher={watch("dropshipper_name")}
				/>
				<TextField
					type={"tel"}
					label="Phone Number"
					fieldName="phone_number"
					register={register("phone_number", {
						required: true,
						pattern: /[0-9]{6}/,
						minLength: 6,
						maxLength: 20,
					})}
					error={errors}
					watcher={watch("phone_number")}
				/>
				<TextField
					disabled={!isDropShipper}
					className="dropship"
					type={"tel"}
					label="Dropshipper phone number"
					fieldName="dropshipper_phone_number"
					register={register("dropshipper_phone_number", {
						pattern: /[0-9]{6}/,
						required: isDropShipper,
						minLength: 6,
						maxLength: 20,
					})}
					error={errors}
					watcher={watch("dropshipper_phone_number")}
				/>
				<TextField
					label="Delivery Address"
					textarea
					fieldName="address"
					register={register("address", {
						required: true,
						maxLength: 120,
					})}
					error={errors}
					watcher={watch("address")}
				/>
			</DeliveryGrid>
		</DeliveryContainer>
	);
}
