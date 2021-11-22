import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Validation from "./routes/Validation";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(
  <Fragment>
    <Navbar />
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="validation" element={<Validation />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
