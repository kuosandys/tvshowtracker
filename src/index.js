import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
