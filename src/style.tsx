import styled from "styled-components";
interface InterfaceError {
	error: any;
	data: any;
}
export const Wrapper = styled.div`
	background-color: white;
	min-height: 550px;
	border-radius: 4px;
	padding: 30px 40px;
	z-index: 10;
	box-shadow: 2px 10px 20px 0 rgba(255, 138, 0, 0.1);
`;

export const BackWrapper = styled.div`
	display: flex;
	& > img {
		margin-right: 16px;
	}
`;
export const Container = styled.div`
	display: flex;
	height: 500px;
`;
export const DeliveryContainer = styled.div`
	width: 100%;
`;
export const SummaryWrapper = styled.div`
	width: 100%;
	max-width: 300px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	text-align: left;
	border-left: 1px solid #ff8a00;
	padding: 0 20px;
	margin: 10px 0;
	& > .header {
		.header-title {
			color: #ff8a00;
			font-size: 24px;
			margin-bottom: 0;
		}
		.item-purchased {
			font-size: 14px;
		}
	}
	& > .footer {
		.cost-item {
			display: flex;
			justify-content: space-between;
			.cost-price {
				font-weight: 700;
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
export const StepperItem = styled.div`
	display: flex;
	align-items: center;
	& > .label {
		margin-left: 10px;
	}
	& > .number {
		background-color: #ff8a00;
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
export const Input = styled.input`
	max-width: calc(400px - 34px);
	width: 100%;
	border: 1px solid #cccccc;
	padding: 30px 16px 10px;
	margin: 0;
	line-height: 20px;
	font-size: initial;
	:focus {
		border: 1px solid #000;
		outline: 0;
	}

	:placeholder-shown {
		padding: 20px 16px 20px;
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
		// data ? (error ? "#FF8A00" : "#1BD97B") : "#000"
	}};
`;
export const InputWrapper = styled.div`
	position: relative;
	max-width: 400px;
	max-height: 60px;
	/* padding: 10px 16px; */
`;
export const Error = styled.img`
	position: absolute;
	right: 16px;
	top: 50%;
	transform: translateY(-50%);
`;
