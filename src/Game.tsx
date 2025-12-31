import { useState } from "react";
import Store from "./components/Store";
import Sidebar from "./components/Sidebar";

type Champion = {
	id: string;
	name: string;
};

export default function Game() {
	return (
		<div className="h-full w-full flex flex-col flex-1">
			<div className="flex h-3/4 w-full bg-red-50">
				<div className="flex flex-1 justify-center items-center p-5">
					{/* Grid */}
					<div className="flex flex-wrap lg:h-full max-h-96 max-w-96 aspect-square border-2 border-gray-300">
						{[...Array(36)].map((_, index) => {
							return (
								<div
									key={index}
									className="border-2 border-gray-300 w-1/6 h-1/6 flex justify-center items-center"
								>
									<span>{index}</span>
								</div>
							);
						})}
					</div>
				</div>
				<Sidebar />
			</div>
			<div className="w-full h-1/4 max-h-60 flex flex-col border-t-2 pt-3">
				<div className="w-full px-5 mb-3">
					<span>Gold: {100}</span>
				</div>
				<Store />
			</div>
		</div>
	);
}
