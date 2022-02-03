//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "@fortawesome/fontawesome-free/css/all.min.css";
// include your styles into the webpack bundle
import "/workspace/react-hello/src/styles/index.css";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="card">
			<div className="bigCounter">
				<div className="clock">
					<i className="far fa-clock"></i>
				</div>

				<div className="cuatro">{props.digitCuatro % 10}</div>
				<div className="tres">{props.digitTres % 10}</div>
				<div className="dos">{props.digitDos % 10}</div>
				<div className="uno">{props.digitUno % 10}</div>
			</div>
		</div>
	);
}

SimpleCounter.protoTypes = {
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitUno={uno}
			digitDos={dos}
			digitTres={tres}
			digitCuatro={cuatro}
		/>,

		document.querySelector("#app")
	);
}, 250);

//render your react application
