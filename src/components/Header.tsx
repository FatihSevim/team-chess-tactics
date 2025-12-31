// import { useUserStore } from "../store";

export default function Header() {
	// const user = useUserStore((state) => state.user);
	// const token = useUserStore((state) => state.token);
	// const setUser = useUserStore((state) => state.setUser);
	// const logout = useUserStore((state) => state.logout);

	return (
		<div className="hidden lg:flex w-full p-3 absolute top-0 left-0 justify-between items-center">
			<div className="flex flex-col">
				<span className="text-2xl">Team Chess Tactics</span>
				<span className="text-xs">definitely nothing life TFT or AutoChess :)</span>
			</div>
			{/* USER INFO
			<div>
				{user ? (
					<div>
						<p>
							User: {user.username} ({user.email})
						</p>
						<p>Token: {token}</p>
						<button onClick={logout}>Logout</button>
					</div>
				) : (
					<div>
						<button
							onClick={() => {
								const mockUser = { id: "1", email: "johndoe@mail.com", username: "John Doe" };
								const mockToken = "token";
								setUser(mockUser, mockToken);
							}}
						>
							Login
						</button>
					</div>
				)}
			</div> */}
		</div>
	);
}
