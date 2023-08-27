"use client";
import DropDown from "@/components/formComponents/DropDown";
import InputField from "@/components/formComponents/InputField";
import { ThreeDotsLoader } from "@/components/Loader";
import { registrationForm } from "@/constants";
import { setLoading, setUser } from "@/redux/features/generalSlice";
import { useRegisterUserMutation } from "@/redux/query/auth";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const initialState = {
	name: "",
	email: "",
	password: "",
	role: "customer",
};
const Register = () => {
	const [formData, setFormData] = useState(initialState);
	type valueType = keyof typeof formData;
	const [registered, setRegistered] = useState(false);
	const router = useRouter();
	const dispatch = useDispatch();
	const GeneralState = useSelector((state: RootState) => state.general);
	const isValidForm = useMemo(() => {
		return formData &&
			formData.name &&
			formData.name.trim() !== "" &&
			formData.email &&
			formData.email.trim() !== "" &&
			formData.password &&
			formData.password.trim() !== ""
			? true
			: false;
	}, [formData]);
	const [registerUser, loading] = useRegisterUserMutation();
	// Function to register user
	const handleRegister = async () => {
		dispatch(setLoading(true));
		await registerUser({
			url: "/api/register",
			data: formData,
		})
			.then((res: any) => {
				if (res.data.success) {
					toast.success(res.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					dispatch(setUser(res.data.user));
				} else {
					toast.error(res.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					setFormData(initialState);
				}
			})
			.catch((err: any) => {
				toast.error(err, {
					position: toast.POSITION.TOP_RIGHT,
				});
			})
			.finally(() => {
				dispatch(setLoading(false));
			});
	};
	// Handle Change in input field
	const handleChange = (value: string, id: string) => {
		setFormData({
			...formData,
			[id]: value,
		});
	};

	return (
		<div className="bg-white relative">
			<div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
				<div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
					<div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
						<div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
							<p className="w-full text-4xl font-medium text-center font-serif">
								{registered
									? "Registration Successfull !"
									: "Sign up for an account"}
							</p>
							{registered ? (
								<button
									className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
              text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
              "
									onClick={() => router.push("/login")}
								>
									Login
								</button>
							) : (
								<div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
									{registrationForm.map((controlItem: any) =>
										controlItem.componentType ===
										"input" ? (
											<InputField
												key={controlItem.id}
												data={controlItem}
												onChange={handleChange}
												value={
													formData[
														controlItem.id as valueType
													]
												}
											/>
										) : controlItem.componentType ===
										  "select" ? (
											<DropDown
												data={controlItem}
												onChange={handleChange}
												value={
													formData[
														controlItem.id as valueType
													]
												}
											/>
										) : null
									)}
									<button
										className=" disabled:opacity-50 rounded-full inline-flex w-full items-center justify-center bg-black px-6 py-2 text-lg 
                 text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                 "
										disabled={
											!isValidForm || GeneralState.loading
										}
										onClick={handleRegister}
									>
										{GeneralState.loading ? (
											<ThreeDotsLoader
												text={"Registering"}
												color={"#ffffff"}
											/>
										) : (
											"Register"
										)}
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
