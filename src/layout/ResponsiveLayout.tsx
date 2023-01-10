import React, { Children, ReactNode } from "react";

interface TChildren {
	children: ReactNode;
}

const ResponsiveLayout = ({ children }: TChildren) => {
	return (
		<main className="md:bg-slate-200 lg:bg-slate-200">
			<div className="md:w-1/2 md:bg-white md:flex md:justify-center md:m-auto lg:w-1/3">
				<div className="w-full h-screen flex flex-col items-center justify-center">
					{children}
				</div>
			</div>
		</main>
	);
};

export default ResponsiveLayout;
