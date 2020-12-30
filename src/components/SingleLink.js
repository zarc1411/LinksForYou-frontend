import {
  Badge,
  Heading,
  VStack,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const SingleLink = ({ tag, name, domain }) => {
  const boxBackground = useColorModeValue("purple.500", "purple.500");
  return (
    <Box
      backgroundColor={boxBackground}
      borderRadius="10px"
      width="100%"
      color="white"
    >
      <Text fontFamily="Josefin Sans" mx="1em" marginTop="1em" fontSize="1.3em">
        {tag.toUpperCase()}
      </Text>
      <Text fontFamily="Josefin Sans" margin="1em" fontSize="1.3em">
        {name}
      </Text>
    </Box>
  );
};
export default SingleLink;
