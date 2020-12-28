import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
