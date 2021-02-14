import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import Carousel from "jherr-versioned-federated-module/carousel";

import "./index.css";

const App = () => (
  <ChakraProvider>
    <Heading>Starter Host</Heading>
    <Carousel />
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
