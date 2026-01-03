import { useState } from "react";
import Sidebar from "./components/Sidebar";

type Champion = {
	id: string;
	name: string;
	gold: number;
};

const initialChampions: Champion[] = [
	{ id: "1", name: "Champion A", gold: 3 },
	{ id: "2", name: "Champion B", gold: 2 },
	{ id: "3", name: "Champion C", gold: 1 },
	{ id: "4", name: "Champion D", gold: 4 },
	{ id: "5", name: "Champion E", gold: 5 },
];

export default function Game() {
	const [bench, setBench] = useState<Champion[]>([]);

	function handlePurchase(Champion: Champion) {
		bench.push(Champion);
		setBench([...bench]);
	}

	return (
		<div className="h-full w-full flex flex-col flex-1">
			<div className="flex h-3/4 w-full bg-red-50">
				<div className="flex flex-1 flex-col justify-center items-center p-5">
					{/* Grid */}
					<div className="flex flex-wrap lg:h-full max-h-128 max-w-lg aspect-square border-2 border-gray-200">
						{[...Array(36)].map((_, index) => {
							return (
								<div
									key={index}
									className="border-2 border-gray-200 w-1/6 h-1/6 flex justify-center items-center"
								>
									<span>{index}</span>
								</div>
							);
						})}
					</div>
					<div className="flex flex-wrap w-full max-w-lg h-22 mt-5 mb-3 border-2 border-gray-200">
						{[...Array(6)].map((_, index) => {
							return (
								<div
									key={index}
									className="border-2 border-gray-200 w-1/6 h-full flex justify-center items-center"
								>
									<span>Bench {index + 1}</span>
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
				{/* STORE */}
				<div className="w-full flex flex-1 justify-center bg-gray-200">
					{initialChampions.map((champ) => (
						<button
							key={champ.id}
							className="flex flex-col items-center justify-center border p-2 m-3 rounded-lg w-1/5 lg:w-36 xl:w-48 bg-amber-100"
							onClick={() => handlePurchase(champ)}
						>
							<span>{champ.name}</span>
							<span>{champ.gold} gold-icon</span>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
