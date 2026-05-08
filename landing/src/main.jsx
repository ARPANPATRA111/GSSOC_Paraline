import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtagProxy() {
  window.dataLayer.push(arguments);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
