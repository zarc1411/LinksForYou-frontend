import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
console.log("fuck");
ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode="light" />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
