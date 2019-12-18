// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import "./styles/normalize.css";
import "./styles/style.css";
import Main from './components/Main'

export default function Index() {
  return <Main />;
}

render(<Index />, document.getElementById("root"));
