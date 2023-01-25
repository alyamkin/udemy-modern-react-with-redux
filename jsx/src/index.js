import React from "react";
import ReactDOM from "react-dom/client";
import App, { message as myMessage } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
console.log(myMessage);
root.render(<App />);
