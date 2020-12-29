import { VStack } from "@chakra-ui/react";
import React from "react";
import SingleLink from "../components/SingleLink";
const Links = () => {
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]} marginTop={10}>
      <SingleLink
        tag="Programming"
        name="New Grads: don't worry too much about the perfect first job"
      />
      <SingleLink
        tag="CS"
        name="How Claude Shannon Invented the Future"
      ></SingleLink>
      <SingleLink
        tag="CS"
        name="The Computer Scientist Who Shrinks Big Data"
      ></SingleLink>
      <SingleLink
        tag="Mathematics"
        name="How the Slowest Computer Programs Illuminate Math’s Fundamental Limits"
      ></SingleLink>
    </VStack>
  );
};

export default Links;
