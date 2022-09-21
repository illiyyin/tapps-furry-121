import { useCallback, useEffect, useState } from "react";

import { useForm, FieldErrorsImpl } from "react-hook-form";
import { Container, Wrapper } from "./style";

import Back from "./component/Back";
import Stepper from "./component/Stepper";
import Summary from "./component/Summary";
import DeliveryStepper from "./component/DeliveryStepper";
import PaymentStepper from "./component/PaymentStepper";
import FinishStep from "./component/FinishStep";
import { IData } from "./model";

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
		reset,
	} = useForm({
		mode: "onChange",
		defaultValues: JSON.parse(localStorage.getItem("savedData") || "{}"),
	});

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
					localStorage.removeItem("savedData");
					return (
						<FinishStep
							data={getValues() as IData}
							handleReset={() => {
								setStep("delivery");
								setPass(["delivery"]);
								reset();
							}}
						/>
					);
				default:
					break;
			}
		},
		[step, errors, watch]
	);

	const onSubmit = useCallback(
		(data: any) => {
			if (data.shipment && data.payment) {
				const obj = { ...data };
				obj.shipment = JSON.parse(data.shipment);
				obj.payment = JSON.parse(data.payment);
			}
			if (step == "delivery") {
				setStep("payment");
				setPass((prev) => [...prev, "payment"]);
			}
			if (step == "payment") {
				setStep("finish");
				setPass((prev) => [...prev, "finish"]);
			}
			localStorage.setItem("savedData", JSON.stringify(data));
		},
		[pass, step]
	);

	const handleBack = useCallback(() => {
		if (step == "delivery") return;
		const tmp = pass.filter((item) => item != step);

		setPass(tmp);
		setStep(tmp[tmp.length - 1]);
	}, [pass, step]);

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
							error={errors as FieldErrorsImpl}
							step={step}
							data={getValues() as IData}
						/>
					</Container>
				</form>
			</Wrapper>
		</div>
	);
}

export default App;
