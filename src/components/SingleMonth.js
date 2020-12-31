import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
const SingleMonth = ({ path }) => {
  return (
    <Link to={`/months/${path}`}>
      <Text fontFamily="Josefin Sans" fontSize="1.3em">
        {path}
      </Text>
    </Link>
  );
};

export default SingleMonth;
