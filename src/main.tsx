import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.ts'
//can also replace with HashRouter
import { BrowserRouter, } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
