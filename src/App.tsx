import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import { useForm } from "react-hook-form";
import { Container, DeliveryContainer, DeliveryGrid, Wrapper } from "./style";
import TextField from "./component/TextField";
import Back from "./component/Back";
import PageHeader from "./component/PageHeader";
import Stepper from "./component/Stepper";
import Summary from "./component/Summary";
import DeliveryStepper from "./component/DeliveryStepper";
import PaymentStepper from "./component/PaymentStepper";
import FinishStep from "./component/FinishStep";
type FormValues = {
	firstName: string;
	// lastName: string;
};

function App() {
	const [step, setStep] = useState("delivery");
	const [pass, setPass] = useState(["delivery"]);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		setValue,
		clearErrors,
		getValues,
		// getFieldState
	} = useForm({ mode: "onChange" });

	const handleStepper = useCallback(
		(step: string) => {
			switch (step) {
				case "delivery":
					return (
						<DeliveryStepper
							register={register}
							watch={watch}
							errors={errors}
							setValue={setValue}
							clearError={clearErrors}
						/>
					);
				case "payment":
					return (
						<PaymentStepper
							register={register}
							watch={watch}
							errors={errors}
						/>
					);
				case "finish":
					return <FinishStep />;

				default:
					break;
			}
		},
		[step, errors, watch]
	);

	const onSubmit = (data: any) => {
		console.log(data);
		console.log(errors);
		if (data.shipment && data.payment) {
			const obj = { ...data };
			obj.shipment = JSON.parse(data.shipment);
			obj.payment = JSON.parse(data.payment);
			console.log(obj);
		}
		if (step == "delivery") {
			setStep("payment");
			setPass((prev) => [...prev, "payment"]);
		}
		if (step == "payment") {
			setStep("finish");
			setPass((prev) => [...prev, "finish"]);
		}
	};
	const handleBack = () => {
		if (step == "delivery") return;
		const tmp = pass.filter((item) => item != step);
		// console.log(tmp);
		setPass(tmp);
		setStep(tmp[tmp.length - 1]);
	};
	// useEffect(() => {
	// 	if (watch("shipper")) setValue("shipper", JSON.parse(watch("shipper")));
	// 	if (watch("payment")) setValue("payment", JSON.parse(watch("payment")));
	// }, [watch("shipper"), watch("payment")]);
	// console.log(getValues());
	// console.log(getFieldState());
	return (
		<div className="App">
			<Wrapper>
				<Stepper pass={pass} />
				<form onSubmit={handleSubmit(onSubmit)}>
					<Container>
						<div className="form-content">
							{step !== "finish" && (
								<Back step={step} getBack={handleBack} />
							)}
							{handleStepper(step)}
						</div>

						<Summary
							step={step}
							handler={() => {}}
							data={getValues()}
						/>
					</Container>
				</form>
			</Wrapper>
		</div>
	);
}

export default App;
