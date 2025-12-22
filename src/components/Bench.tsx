export default function Bench() {
	const champList = [
		{ id: "1", name: "Champion A", gold: 3 },
		{ id: "2", name: "Champion B", gold: 2 },
		{ id: "3", name: "Champion C", gold: 1 },
		{ id: "4", name: "Champion D", gold: 4 },
		{ id: "5", name: "Champion E", gold: 5 },
	];
	return (
		<div className="w-full flex flex-1 bg-gray-200">
			{champList.map((champ) => (
				<div
					key={champ.id}
					className="flex flex-1 flex-col items-center justify-center border p-2 m-3 rounded-lg bg-amber-100"
				>
					<span>{champ.name}</span>
					<span>{champ.gold} gold-icon</span>
				</div>
			))}
		</div>
	);
}
