import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import ResponsiveLayout from "../../layout/ResponsiveLayout";

const Home: NextPage = () => {
	const router = useRouter();
	const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		router.push(event.currentTarget.name);
	};

	return (
		<ResponsiveLayout>
			<div className="p-4 w-full h-screen">
				<div className="mt-4 mx-8 ">
					<h1 className="text-3xl">Hi! 주영 </h1>
					<h2 className="text-md mt-2">welcome to Royal Guard </h2>
				</div>
				<section className="mt-16 mx-8 flex flex-col gap-4">
					<button
						className="border-2 border-black rounded-lg"
						name="check"
						onClick={onClickHandler}
					>
						<div className="flex flex-row">
							<div className="flex-1 h-36 flex flex-col items-center justify-center">
								<h3 className="text-xl">출석 체크하기</h3>
								<h3 className="text-sm">간단한 설명 </h3>
							</div>
							<div className="flex-1 flex flex-col items-center justify-center">
								img
							</div>
						</div>
					</button>
					<button
						className="border-2 border-black rounded-lg"
						name="report"
						onClick={onClickHandler}
					>
						<div className="flex flex-row">
							<div className="flex-1 h-36 flex flex-col items-center justify-center">
								<h3 className="text-xl">셀 보고서 작성하기</h3>
								<h3 className="text-sm">간단한 설명 </h3>
							</div>
							<div className="flex-1 flex flex-col items-center justify-center">
								img
							</div>
						</div>
					</button>
					<button
						className="border-2 border-black rounded-lg"
						name="setting"
						onClick={onClickHandler}
					>
						<div className="flex flex-row">
							<div className="flex-1 h-36 flex flex-col items-center justify-center">
								<h3 className="text-xl">셀 관리하기</h3>
								<h3 className="text-sm">간단한 설명 </h3>
							</div>
							<div className="flex-1 flex flex-col items-center justify-center">
								img
							</div>
						</div>
					</button>
				</section>
			</div>
		</ResponsiveLayout>
	);
};

export default Home;
0;
