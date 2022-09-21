import React, { HTMLInputTypeAttribute } from "react";
import { Alert, Input, InputWrapper, LabelInput } from "../style";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import IconCross from "../assets/cross.svg";
import IconCheck from "../assets/check.svg";

interface InputInterface {
	// register: UseFormRegister<FieldValues>;
	register: any;
	fieldName: string;
	error: any;
	watcher: any;
	type?: HTMLInputTypeAttribute;
	textarea?: Boolean;
	label: string;
	disabled?: Boolean;
	className?:string
}
export default function TextField({
	register,
	fieldName,
	error,
	watcher,
	type = "text",
	textarea,
	label,
	disabled,
	className
}: InputInterface) {
	return (
		<InputWrapper>
			{watcher && (
				<LabelInput error={error[fieldName]} data={watcher}>
					{label}
				</LabelInput>
			)}
			{textarea ? (
				<>
					<Input
						as={"textarea"}
						rows={5}
						{...register}
						placeholder={label}
						error={error[fieldName]}
						data={watcher}
					/>
					<p className="field-length">
						{`${watcher?.length || 0}/120`}
					</p>
				</>
			) : (
					<Input
						className={className}
					disabled={disabled}
					type={type}
					{...register}
					placeholder={label}
					error={error[fieldName]}
					data={watcher}
				/>
			)}
			{error[fieldName] ? (
				<Alert src={IconCross} />
			) : watcher ? (
				<Alert src={IconCheck} />
			) : null}
			{/* {error[fieldName] && watcher && <Error src={IconCross} />} */}
		</InputWrapper>
	);
}
