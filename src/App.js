import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="app-container">
			<div className="app">
				<Navbar />
				<MainContent />
			</div>
		</div>
	);
}

export default App;