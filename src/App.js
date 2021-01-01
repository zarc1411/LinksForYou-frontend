import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Months from "./Pages/Months";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Links from "./Pages/Links";
const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={`/months`}>
          <Months />
        </Route>
        <Route path={`/months/:month`}>
          <Links />
        </Route>
      </Switch>
    </ChakraProvider>
  );
};

export default App;
