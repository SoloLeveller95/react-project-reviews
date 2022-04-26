import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// Math.random() = number between 0 - 0.99999999999 but it cant never be number 1
// Math.floor() = Number rounded down
