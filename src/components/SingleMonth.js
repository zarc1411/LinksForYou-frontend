import React from "react";
import { Link } from "react-router-dom";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
const SingleMonth = ({ path }) => {
  const currentYear = new Date().getFullYear();
  const monthName = path.toUpperCase();
  return (
    <Link to={`/${currentYear}/${path}`}>
      <Text fontFamily="Montserrat" fontSize="1.3em">
        {monthName}
      </Text>
    </Link>
  );
};

export default SingleMonth;
