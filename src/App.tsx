import "./App.css";
import Header from "./components/Header";

import { useUserStore } from "./store";

function App() {
	const user = useUserStore((state) => state.user);
	const token = useUserStore((state) => state.token);
	const setUser = useUserStore((state) => state.setUser);
	const logout = useUserStore((state) => state.logout);

	return (
		<>
			<Header />
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
						<p>Please login.</p>
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
			</div>
		</>
	);
}

export default App;
