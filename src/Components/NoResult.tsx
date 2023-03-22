import React from "react";

const NoResult = () => {
	return (
		<div className="grid justify-center">
			<div className="container bg-gray-200 p-10 rounded md:w-full m-0">
				<h2 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-center">
					Word <span className="text-purple-500">Not</span> Found
				</h2>
			</div>
		</div>
	);
};

export default NoResult;
