//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const TrafficLight = () => {
	const [color, setColor] = useState("brillo");

	return (
		<div>
			<div className="palo"></div>
			<div className="Semaforo container mt-0">
				<div
					className={
						'green rounded-circle align-items-start + ${color === "green" ? "brillo" : ""}'
					}
					onClick={() => setColor("green")}
					style={}></div>

				<div
					className={
						'yellow rounded-circle d-flex align-items-center + ${color === "yellow" ? "brillo" : ""}'
					}
					onClick={() => setColor("yellow")}
					style={}></div>

				<div
					className={
						'red rounded-circle d-flex align-items-end justify-content-end + ${color === "red" ? "brillo" : ""}'
					}
					onClick={() => setColor("red")}
					style={}></div>
			</div>
		</div>
	);
};

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
