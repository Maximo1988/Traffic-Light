//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const TrafficLight = () => {
	const [traffic0, setTraffic0] = useState("green");
	const [traffic1, setTraffic1] = useState("yellow");
	const [traffic2, setTraffic2] = useState("red");
	return (
		<div>
			<div className="palo"></div>
			<div
				className="Semaforo container-fluid items-center"
				width="250px">
				<div
					className={
						"green rounded-circle align-items-start ${traffic0}"
					}
					onClick={() => setTraffic0("greenOff")}
					style={{
						width: "100px",
						height: "100px",
					}}></div>

				<div
					className={
						"yellow rounded-circle d-flex align-items-center ${traffic1}"
					}
					onClick={() => setTraffic1("yellowOff")}
					style={{
						width: "100px",
						height: "100px",
					}}></div>

				<div
					className={
						"red rounded-circle d-flex align-items-end justify-content-end ${traffic2}"
					}
					onClick={() => setTraffic2("redOff")}
					style={{
						width: "100px",
						height: "100px",
					}}></div>
			</div>
		</div>
	);
};

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
