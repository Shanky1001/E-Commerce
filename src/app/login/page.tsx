"use client";
import InputField from "@/components/formComponents/InputField";
import { ThreeDotsLoader } from "@/components/Loader";
import { loginForm } from "@/constants";
import { setLoading, setUser } from "@/redux/features/generalSlice";
import { useGetLoginUserMutation } from "@/redux/query/auth";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
	const [formData, setFormData] = useState({ email: "", password: "" });
	type valueType = keyof typeof formData;
	const router = useRouter();
	const GeneralState = useSelector((state: RootState) => state.general);
	const dispatch = useDispatch();
	// Handle Change in input field
	const handleChange = (value: string, id: string) => {
		setFormData({
			...formData,
			[id]: value,
		});
	};
	const [loginUser] = useGetLoginUserMutation();
	// To handle Login button
	const handleLogin = async () => {
		dispatch(setLoading(true));
		await loginUser({
			url: "/api/login",
			data: formData,
		})
			.then((res: any) => {
				if (res.data.success) {
					toast.success(res.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
					dispatch(setUser(res.data.data.user));
					router.push("/");
				} else {
					toast.error(res.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
				}
			})
			.catch((err: any) => {
				toast.success(err, {
					position: toast.POSITION.TOP_RIGHT,
				});
			})
			.finally(() => {
				dispatch(setLoading(false));
			});
	};

	// To check if filled data is valid or not
	const isValidForm = useMemo(() => {
		return formData &&
			formData.email &&
			formData.email.trim() !== "" &&
			formData.password &&
			formData.password.trim() !== ""
			? true
			: false;
	}, [formData]);

	return (
		<div className="bg-white relative">
			<div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
				<div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
					<div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
						<div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
							<p className="w-full text-4xl font-medium text-center font-serif">
								Login
							</p>
							<div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
								{loginForm.map((controlItem: any) =>
									controlItem.componentType === "input" ? (
										<InputField
											key={controlItem.id}
											data={controlItem}
											value={
												formData[
													controlItem.id as valueType
												]
											}
											onChange={handleChange}
										/>
									) : null
								)}
								<button
									className="disabled:opacity-50 rounded-full inline-flex w-full items-center justify-center bg-black px-6 py-2 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                     "
									disabled={
										!isValidForm || GeneralState.loading
									}
									onClick={handleLogin}
								>
									{GeneralState.loading ? (
										<ThreeDotsLoader
											text={"Logging In"}
											color={"#ffffff"}
										/>
									) : (
										"Login"
									)}
								</button>
								<div className="flex flex-col gap-2">
									<p className="text-orange-600">New to website ?</p>
									<button
										className="inline-flex rounded-full w-full items-center justify-center bg-black px-6 py-2 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                     "
										onClick={() => router.push("/register")}
									>
										Register
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
