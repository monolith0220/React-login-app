import React from "react";
import "./App.css";
import { Home } from "./Home";

function App() {
	return (
		<div className="App">
			<h1>
				Firebaseでグーグルのアカウント使って
				<br />
				ログイン機能実装してみた
			</h1>
			<Home />
		</div>
	);
}

export default App;
