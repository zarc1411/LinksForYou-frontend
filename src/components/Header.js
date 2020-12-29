import React from "react";
import { Flex, Box, Spacer, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorSwitch from "./ColorSwitch";
const Header = () => {
  const logoColor = useColorModeValue("pink.500", "purple.500");
  return (
    <Flex marginTop={5} mx={["10%", "13%", "16%", "20%"]}>
      <Box fontFamily="Montserrat" fontSize="1.5em">
        <Link to="/">LinksForYou</Link>
      </Box>
      <Spacer />
      <ColorSwitch />
    </Flex>
  );
};

export default Header;
