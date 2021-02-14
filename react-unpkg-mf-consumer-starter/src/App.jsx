import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import "./index.css";

const App = () => (
  <ChakraProvider>
    <Heading>Starter Host</Heading>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
