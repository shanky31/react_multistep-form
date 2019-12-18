// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
import "./styles/normalize.css";
import "./styles/style.css";

export default function Index() {
  return <div>Hello World!</div>;
}

render(<Index />, document.getElementById("root"));
