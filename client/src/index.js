import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./CSS/index.css";
// import 'https://fonts.googleapis.com/css?family=Open+Sans';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
