import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { useForm } from "react-hook-form";
import { Container, DeliveryContainer, Wrapper } from "./style";
import TextField from "./component/TextField";
import Back from "./component/Back";
import PageHeader from "./component/PageHeader";
import Stepper from "./component/Stepper";
import Summary from "./component/Summary";

function App() {
	const [count, setCount] = useState(0);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => console.log(data);
	console.log(errors);
	return (
		<div className="App">
			<Wrapper>
				<Stepper />
				<Back />
				<form
					onSubmit={handleSubmit(onSubmit)}
				>
					<Container>
						<DeliveryContainer>
							<PageHeader />
							<TextField
								fieldName="name"
								register={register("name", {
									required: true,
									minLength: 2,
								})}
								error={errors}
								watcher={watch("name")}
							/>
						</DeliveryContainer>
						{/* <input type="submit" /> */}
						<Summary />
					</Container>
				</form>
			</Wrapper>
		</div>
	);
}

export default App;
