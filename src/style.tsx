import styled from "styled-components";
import { IStepper, InterfaceError } from "./model";

const handleErrorInput = ({ error, data }: InterfaceError) => {
	if (data && !error) return "#1BD97B";
	if (error) return "#FF8A00";
	return "#CCCCCC";
};

export const Wrapper = styled.div`
	margin-top: 2rem;
	background-color: white;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	max-width: 1060px;
	min-height: 520px;
	border-radius: 4px;
	padding: 0 30px;
	padding-top: 70px;

	@media (min-width: 1100px) {
		padding-top: 30px;
		padding-left: 40px;
		padding-right: 0;
	}
	z-index: 10;
	box-shadow: 2px 10px 20px 0 rgba(255, 138, 0, 0.1);
	& > form {
		width: 100%;
	}
`;

export const BackWrapper = styled.div`
	user-select: none;
	cursor: pointer;
	display: flex;
	& > p {
		margin: 8px 0;
	}
	& > img {
		margin-right: 16px;
	}
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 500px;
	width: 100%;
	max-width: 500px;
	margin: auto;
	@media (min-width: 1100px) {
		flex-direction: row;
		margin: 0;
		max-width: 100%;
	}
`;
export const FinishContainer = styled.div`
	display: flex;
	align-items: center;
	@media (min-width: 1100px) {
		width: 760px;
		
	}
	height: 100%;
	& > .content {
		margin: 0 auto;
		text-align: left;
		.order-id {
			margin: 0;
		}
		.order-action {
			margin: 0;
			margin-bottom: 60px;
		}
	}
`;
export const PaymentContainer = styled.div`
	& > .payment-item {
		margin-bottom: 60px;
		.error {
			font-size: 12px;
			margin-top: 0;
			text-align: left;
			color: red;
		}
	}
`;
export const DeliveryContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	& > .header {
		display: flex;
		flex-direction: column;
		width: fit-content;
		margin-bottom: 24px;
		@media (min-width: 1100px) {
			width: 100%;
			margin-bottom: 0;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
		}

		.checkbox {
			margin-right: 32px;
			text-align: left;
			padding-left: 32px;
			@media (min-width: 1100px) {
			}
			position: relative;
			user-select: none;
			cursor: pointer;
			z-index: 10;
			& > input {
				position: absolute;
				opacity: 0;
				cursor: pointer;

				:checked ~ {
					.icon-check {
						display: block;
					}
				}
			}
			.icon-check {
				display: none;
				position: absolute;
				width: 20px;
				height: 20px;
				left: 0px;
				top: 50%;
				transform: translateY(-50%);
			}
			.checkmark {
				position: absolute;
				z-index: -1;
				top: 2px;
				left: 0;
				height: 20px;
				width: 20px;
				outline: 2px solid #1bd97b;
				::after {
					position: absolute;
					display: none;
				}
			}
		}
	}
`;
export const DeliveryGrid = styled.div`
	display: grid;
	justify-content: left;
	grid-template-columns: 1fr;
	@media (min-width: 1100px) {
		grid-template-columns: 400px 300px;
	}
	gap: 10px 30px;
`;
export const PaymentGrid = styled.div`
	display: grid;
	gap: 10px;
`;
export const CheckboxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 1100px) {
		flex-direction: row;
	}
	gap: 10px;
`;
export const CheckboxItem = styled.label`
	display: block;
	position: relative;
	padding: 21px 0;
	width: 180px;
	cursor: pointer;
	font-size: 22px;
	user-select: none;
	text-align: left;
	z-index: 10;
	& > input {
		position: absolute;
		opacity: 0;
		cursor: pointer;

		:checked ~ {
			.checkmark {
				background-color: rgba(27, 217, 123, 0.1);
				outline: 2px solid #1bd97b;
			}
			.value {
				color: #2d2a40;
			}
			.header {
				color: #000;
			}
			.icon-check {
				display: block;
			}
		}
	}
	:has(.value) {
		padding: 12px 0;
		.header {
			font-size: 13px;
		}
	}
	& > .icon-check {
		display: none;
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
	}
	& > .header {
		font-size: 16px;
		line-height: 16px;
		margin: 0;
		padding-left: 15px;
		color: rgba(0, 0, 0, 0.6);
	}
	& > .value {
		font-size: 16px;
		padding-left: 15px;
		margin: 0;
		color: rgba(45, 42, 64, 0.6);
		font-weight: 700;
	}
	& > .checkmark {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		height: 60px;
		width: 180px;
		background-color: white;
		outline: 1px solid #cccccc;
		::after {
			position: absolute;
			display: none;
		}
	}
`;
export const SummaryWrapper = styled.div`
	width: 100%;
	max-width: none;
	@media (min-width: 1100px) {
		max-width: 300px;
	}

	min-height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	text-align: left;
	border-left: 1px solid #ff8a00;
	margin: 20px 0;
	& > .header {
		padding: 0 20px;
		hr {
			margin: 20px 0;
			border: 1px solid #d8d8d8;
			width: 80px;
		}
		.header-title {
			color: #ff8a00;
			font-size: 24px;
			margin-top: 10px;
			margin-bottom: 0;
		}
		.item-purchased {
			margin-top: 10px;
			font-size: 14px;
			color: rgba(0, 0, 0, 0.6);
		}
		.delivery-estimation {
			margin: 0;
		}
		.delivery-label {
			color: #1bd97b;
			font-weight: 500;
			margin-top: 4px;
		}
	}
	& > .footer {
		padding: 0 20px;
		.cost-item {
			display: flex;
			justify-content: space-between;
			& > p {
				margin-top: 12px;
				margin-bottom: 0;
			}
			.cost-price {
				font-weight: 700;
			}
			.cost-label {
				font-size: 14px;
				color: rgba(0, 0, 0, 0.6);
				span {
					font-weight: 700;
				}
			}
			.total {
				margin-top: 24px;
				margin-bottom: 12px;
				font-size: 24px;
				color: #ff8a00;
			}
		}
	}
`;
export const StepperWrapper = styled.div`
	position: absolute;
	margin-top: 4px;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	background-color: #fffae6;
	padding: 20px 38px;
	border-radius: 999px;
`;
export const StepperItem = styled.div<IStepper>`
	display: flex;
	align-items: center;
	& > .label {
		margin-left: 10px;
	}
	& > .number {
		background-color: ${({ activeItem }) =>
			activeItem ? "rgba(255, 138, 0,1)" : "rgba(255, 138, 0,0.2)"};
		height: 30px;
		width: 30px;
		border-radius: 99px;

		display: flex;
		align-items: center;
		& > p {
			margin: auto;
			text-align: center;
			color: white;
		}
	}
	& > .chevron-icon {
		margin: 0 30px;
	}
`;

export const Header = styled.h3`
	color: #ff8a00;
	font-size: 36px;
	position: relative;
	text-align: left;
	z-index: 10;
	::after {
		content: "";
		position: absolute;
		bottom: -4px;
		z-index: -1;
		left: 0;
		background-color: #eeeeee;
		height: 8px;
		width: 300px;
	}
`;

export const Input = styled.input<InterfaceError>`
	max-width: calc(400px - 60px);
	.dropship {
		max-width: calc(300px - 60px);
	}
	width: 100%;
	font-family: "Inter", sans-serif;
	padding: 30px 44px 10px 16px;
	line-height: 20px;
	font-size: initial;
	border: 0;
	outline: 1px solid ${({ error, data }) => handleErrorInput({ error, data })};
	:focus {
		outline: 1px solid
			${({ error, data }) => handleErrorInput({ error, data })};
	}

	:placeholder-shown {
		padding: 20px 44px 20px 16px;
	}
`;

export const LabelInput = styled.p<InterfaceError>`
	font-size: small;
	position: absolute;
	top: 0;
	left: 16px;
	margin-top: 12px;
	line-height: 16px;
	color: ${({ error, data }) => {
		if (error) return "#FF8A00";
		if (data && !error) return "#1BD97B";
		return "#000";
	}};
`;
export const InputWrapper = styled.div`
	justify-self: left;
	text-align: left;
	position: relative;
	width: 100%;
	.dropship {
		max-width: 400px;
		@media (min-width: 1100px) {
			max-width: 300px;
		}
	}
	& > input.dropship {
		max-width: calc(400px - 60px);
		@media (min-width: 1100px) {
			max-width: calc(300px - 60px);
		}
	}
	max-width: 400px;
	min-height: 60px;
	& > .field-length {
		position: absolute;
		margin: 0;
		font-size: 12px;
		bottom: 16px;
		left: 16px;
		color: #cccccc;
	}
`;
export const Alert = styled.img`
	position: absolute;
	right: 12px;
	top: 50%;
	transform: translateY(-50%);
`;

export const SubmitButton = styled.button`
	margin-top: 18px;
	background-color: #ff8a00;
	width: 100%;
	border: none;
	padding: 20px;
	color: white;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	:disabled {
		background-color: rgba(0, 0, 0, 0.6);
	}
`;
