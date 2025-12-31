import { useState } from "react";

type Player = {
	id: string;
	username: string;
	health: number;
};

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showPlayers, setShowPlayers] = useState(true);

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
		<>
			<div
				className={
					(showSidebar ? "absolute right-0 w-64" : "hidden") +
					" h-full lg:w-64 lg:block bg-gray-200 border-l-2 p-3"
				}
			>
				<div className={"flex justify-evenly" + (showSidebar ? " mt-8" : "")}>
					<button
						className={showPlayers ? "bg-blue-300 rounded-xl px-4 py-1" : ""}
						onClick={() => setShowPlayers(true)}
					>
						players
					</button>
					<button
						className={!showPlayers ? "bg-blue-300 rounded-xl px-4 py-1" : ""}
						onClick={() => setShowPlayers(false)}
					>
						last match
					</button>
				</div>
				{showPlayers ? (
					<div>
						{playerList
							.sort((a, b) => b.health - a.health)
							.map((player) => (
								<Player key={player.id} {...player} />
							))}
					</div>
				) : (
					<div>
						<span>last match details</span>
					</div>
				)}
			</div>
			<div className="lg:hidden absolute top-2 right-3">
				<button onClick={() => setShowSidebar(!showSidebar)}>
					{showSidebar ? "Hide Sidebar" : "Show Sidebar"}
				</button>
			</div>
		</>
	);
}
