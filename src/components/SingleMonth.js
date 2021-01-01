import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
const SingleMonth = ({ path }) => {
  return (
    <Link to={`/months/${path}`}>
      <motion.div
        whileHover={{ scale: 1.3, originX: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
      >
        <Text fontFamily="Josefin Sans" fontSize="1.3em">
          {path}
        </Text>
      </motion.div>
    </Link>
  );
};

export default SingleMonth;
