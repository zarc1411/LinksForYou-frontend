import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Months from "./Pages/Months";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Links from "./Pages/Links";
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path={`/months`}>
        <Months />
      </Route>
      <Route path={`/months/:month`}>
        <Links />
      </Route>
    </ChakraProvider>
  );
};

export default App;
