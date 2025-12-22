import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./Game";

function App() {
	return (
		<>
			<div className="flex flex-col flex-1 h-full">
				<Header />
				<Game />
				<Footer />
			</div>
		</>
	);
}

export default App;
