import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/global.scss";
import Index from "./pages";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Index />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
