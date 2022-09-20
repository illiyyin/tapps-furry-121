import React from "react";
import { Error, Input, InputWrapper, LabelInput } from "../style";
import { useForm } from "react-hook-form";
import IconCross from "../assets/cross.svg";

interface InputInterface {
	register: any;
	fieldName: string;
	error: any;
	watcher: any;
}
export default function TextField({
	register,
	fieldName,
	error,
	watcher,
}: InputInterface) {
	// const { handleSubmit, watch } = useForm();
  console.log(error[fieldName])
	return (
		<InputWrapper>
			{watcher && <LabelInput error={error[fieldName]} data={watcher}>Label</LabelInput>}
			<Input type="text" {...register} placeholder="ini placeholder" />
			{error[fieldName] && (
				<Error src={IconCross} />
			)}
		</InputWrapper>
	);
}
