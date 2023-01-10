import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useLoginMutation } from "../../graphql/generated";
import { graphqlRequestClient } from "../../clients/reqestClient";
import { LoginForm } from "../model/login";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import toast, { Toaster } from "react-hot-toast";
import { makeErrorMessage } from "../utils/util";
import { userState } from "../store/authState";
import { INTOUCH_CELL_LEADER } from "../constant/constant";
import { NextSeo } from "next-seo";

const Login: NextPage = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginForm>();

	const router = useRouter();
	const setUser = useSetRecoilState(userState);
	const { mutate, isLoading, isError, isSuccess, data, error } =
		useLoginMutation(graphqlRequestClient, {
			onSuccess: (data) => {
				const userInfo = JSON.stringify({
					accessToken: data.login.accessToken,
				});
				localStorage.setItem(INTOUCH_CELL_LEADER, userInfo);
				graphqlRequestClient.setHeader("authorization", data.login.accessToken);
				setUser({
					isLoggedIn: true,
					accessToken: data.login.accessToken,
				});
				router.push("/home");
			},
			onError(errors) {
				if (error instanceof Error) {
					toast.error(
						`로그인에 실패했습니다.\n${makeErrorMessage(error.message)}`
					);
				}
			},
		});

	const onSubmitHandler = ({ phone, password }: LoginForm) => {
		mutate({
			input: {
				phone,
				password,
			},
		});
	};

	return (
		<>
			<NextSeo
				title="로그인 | Royal-Garden"
				description="this is made for intouch-church"
			/>
			<main className="md:bg-slate-200 lg:bg-slate-200">
				<div className="md:w-1/3 md:bg-white md:flex md:justify-center md:m-auto">
					<div className="w-full h-screen flex flex-col items-center justify-center">
						<h1 className="text-4xl font-poppins font-light">Royal Garden</h1>
						<h2 className="text-sm italic mb-8">by intouch</h2>
						<form
							onSubmit={handleSubmit(onSubmitHandler)}
							className="space-y-4"
						>
							<div className="flex flex-col justify-center w-80">
								<label htmlFor="phone" className="sr-only">
									휴대폰번호
								</label>
								<input
									id="phone"
									type="text"
									placeholder="Phone Number"
									{...register("phone", {
										required: "휴대폰번호를 입력해주세요",
										setValueAs: (v) => v.replace(/[-.,_+]|\s/g, ""),
										minLength: {
											value: 9,
											message: "최소 9자리 이상 입력해주세요",
										},
										maxLength: {
											value: 11,
											message: "휴대폰번호는 최대 11자리입니다",
										},
									})}
									className="mt-1 block w-full py-2 px-3 border border-gray-300 outline-none appearance-none focus:border-black sm:text-sm"
								/>
								{errors.phone && (
									<p className="mt-1 text-sm text-red-600">
										{errors.phone.message}
									</p>
								)}
							</div>

							<div className="flex flex-col justify-center">
								<label htmlFor="password" className="sr-only">
									비밀번호
								</label>
								<input
									id="password"
									type="password"
									placeholder="Password"
									{...register("password", {
										required: "비밀번호를 입력해주세요",
									})}
									className="mt-1 block w-full py-2 px-3 border border-gray-300 outline-none appearance-none focus:border-black sm:text-sm"
								/>
								{errors.password && (
									<p className="mt-1 text-sm text-red-600">
										{errors.password.message}
									</p>
								)}
							</div>

							<div className="pt-4">
								<button
									type="submit"
									className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium text-white rounded-md hover:bg-navy-blue bg-navy-blue/90"
								>
									LOGIN
								</button>
							</div>
						</form>
					</div>
				</div>
				<Toaster
					toastOptions={{
						success: {
							style: {
								background: "#fff",
								color: "#222",
							},
						},
						error: {
							duration: 1000,
							style: {
								background: "#fff",
								color: "#222",
							},
						},
					}}
				/>
			</main>
		</>
	);
};

export default Login;
