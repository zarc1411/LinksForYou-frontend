import React from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorSwitch from "./ColorSwitch";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <Flex marginTop={5} mx={["10%", "13%", "16%", "20%"]}>
      <motion.div
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Box fontFamily="Josefin Sans" fontSize="1.5em">
          <Link to="/">LinksForYou</Link>
        </Box>
      </motion.div>
      <Spacer />
      <ColorSwitch />
    </Flex>
  );
};

export default Header;
