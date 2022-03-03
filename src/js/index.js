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
		<div className="container-fluid text-center mt-3" width="250px">
			<div
				className={`rounded-circle align-self-start ${traffic0}`}
				onClick={() => setTraffic0("greenOff")}
				style={{
					width: "100px",
					height: "100px",
				}}></div>

			<div
				className="yellow rounded-circle d-flex align-items-center "
				onClick={() => setTraffic1("yellow - off")}
				style={{
					background: "yellow",
					width: "100px",
					height: "100px",
				}}></div>

			<div
				className="red rounded-circle d-flex align-items-end justify-content-end"
				onClick={() => setTraffic2("red - off")}
				style={{
					background: "red",
					width: "100px",
					height: "100px",
				}}></div>
		</div>
	);
};

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
