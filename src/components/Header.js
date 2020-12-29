import React from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorSwitch from "./ColorSwitch";
const Header = () => {
  return (
    <Flex marginTop={5} mx={["10%", "13%", "16%", "20%"]}>
      <Box fontFamily="Josefin Sans" fontSize="1.5em">
        <Link to="/">LinksForYou</Link>
      </Box>
      <Spacer />
      <ColorSwitch />
    </Flex>
  );
};

export default Header;
