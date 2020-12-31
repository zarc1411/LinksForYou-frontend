import { Text, Box, useColorModeValue, Link } from "@chakra-ui/react";
import React from "react";
const SingleLink = ({ tag, name, url }) => {
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
      <Link href={url} target="_blank">
        <Text fontFamily="Josefin Sans" margin="1em" fontSize="1.3em">
          {name}
        </Text>
      </Link>
    </Box>
  );
};
export default SingleLink;
