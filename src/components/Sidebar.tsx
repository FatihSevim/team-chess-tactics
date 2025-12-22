type Player = {
	id: string;
	username: string;
	health: number;
};

export default function Sidebar() {
	const playerList = [
		{ id: "1", username: "Player 1", health: 80 },
		{ id: "2", username: "Player 2", health: 90 },
		{ id: "3", username: "Player 3", health: 75 },
		{ id: "4", username: "Player 4", health: 60 },
		{ id: "5", username: "Player 5", health: 95 },
		{ id: "6", username: "Player 6", health: 55 },
	];

	const Player = (playerInfo: Player) => {
		return (
			<div className="border-2 border-gray-400 p-2 my-4 rounded-lg bg-amber-100">
				<p>{playerInfo.username}</p>
				<div className="border rounded-full w-full h-4 bg-red-300 flex justify-center items-center">
					<span className="text-xs">{`${playerInfo.health}/100`}</span>
				</div>
			</div>
		);
	};
	return (
		<div className="h-full w-64 bg-gray-200 border-l-2 p-3">
			<div>
				{playerList
					.sort((a, b) => b.health - a.health)
					.map((player) => (
						<Player key={player.id} {...player} />
					))}
			</div>
		</div>
	);
}
