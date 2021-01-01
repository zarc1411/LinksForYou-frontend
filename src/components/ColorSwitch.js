import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Switch onChange={toggleColorMode} colorScheme="dark" size="lg"></Switch>
  );
};

export default ColorSwitch;
