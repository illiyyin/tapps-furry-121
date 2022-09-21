import {
	Ref,
	MultipleFieldErrors,
	Message,
	FieldErrorsImpl,
	UseFormWatch,
	FieldValue,
	FieldValues,
	UseFormRegister,
	RegisterOptions,
	UseFormRegisterReturn,
	UseFormSetValue,
	UseFormClearErrors,
} from "react-hook-form";

import { HTMLInputTypeAttribute } from "react";
export interface ISelect {
	label: string;
	value?: number;
}

export interface IData {
	shipment: ISelect;
	payment: ISelect;
	dropshipper_name: string;
}
export interface Dict {
	[key: string]: string;
}

export interface IStepper {
	activeItem?: Boolean;
	pass?: string[];
}
export type FieldError = {
	type: string;
	ref?: Ref;
	types?: MultipleFieldErrors;
	message?: Message;
};
export interface InterfaceError {
	error: FieldErrorsImpl;
	data?: IData;
}

export interface InputInterface {
	register: any;
	error: any;
	watcher: any;
	fieldName: string;
	type?: HTMLInputTypeAttribute;
	textarea?: Boolean;
	label: string;
	disabled?: Boolean;
	className?: string;
}
export interface ISummary extends InterfaceError {
	step: string;
}
export interface ILabel {
	label: string;
}
export interface IBack {
	step: string;
	getBack?: () => void;
}

export interface IForm {
	watch: UseFormWatch<FieldValue<FieldValues>>;
	register: UseFormRegisterReturn;
}

export interface IFinish {
  data: IData;
  handleReset:()=>void
}
export interface IOptions extends IForm {
	options: ISelect[];
	fieldName: string;
}

export interface IPayment {
	watch: UseFormWatch<FieldValue<FieldValues>>;
	errors: FieldErrorsImpl;
	register: UseFormRegister<FieldValues>;
}

export interface IDelivery extends IPayment {
	setValue: UseFormSetValue<FieldValues>;
	clearError: UseFormClearErrors<FieldValues>;
}
