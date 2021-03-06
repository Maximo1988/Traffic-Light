//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const TrafficLight = () => {
	const [color, setColor] = useState("green");

	return (
		<div>
			<div className="cable"></div>
			<div className="Semaforo container mt-0">
				<div
					onClick={() => setColor("green")}
					className={
						"green rounded-circle align-items-start" +
						(color === "green" ? " glow" : "")
					}></div>

				<div
					onClick={() => setColor("yellow")}
					className={
						"yellow rounded-circle d-flex align-items-center" +
						(color === "yellow" ? " glow" : "")
					}></div>

				<div
					onClick={() => setColor("red")}
					className={
						"red rounded-circle d-flex align-items-end" +
						(color === "red" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
