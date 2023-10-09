import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.ts";
//can also replace with HashRouter
import { HashRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
