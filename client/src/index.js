import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import "./global.css"; // ✅ This is needed to apply background globally

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
