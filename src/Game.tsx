import { useState } from "react";
import Bench from "./components/Bench";
import Sidebar from "./components/Sidebar";

type Champion = {
	id: string;
	name: string;
};

export default function Game() {
	const [showBench, setShowBench] = useState(true);
	return (
		<div className="h-full w-full flex flex-col flex-1">
			<div className="flex h-full w-full bg-red-50">
				<div className="flex flex-1 justify-center items-center">
					{/* Grid */}
					<div className="flex flex-wrap w-3/4 h-3/4 border-2 border-gray-300">
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
			<div className="w-full h-80 flex flex-col justify-between px-5 border-t-2 pt-3">
				<button onClick={() => setShowBench(!showBench)}>{showBench ? "Store" : "Bench"}</button>
				<span>Gold: {100}</span>
				{showBench ? <Bench /> : null}
			</div>
		</div>
	);
}
