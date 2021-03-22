import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
