import {
  SimpleGrid,
  Box,
  Text,
  useColorModeValue,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import SingleMonth from "../components/SingleMonth";
import PublishArticles from "../images/PublishArticles.svg";
import OnlineArticles from "../images/OnlineArticles.svg";

const Months = () => {
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]}>
      <SimpleGrid
        marginTop={10}
        minChildWidth="10em"
        spacing="2em"
        textAlign="center"
        padding={10}
      >
        <VStack margin="auto">
          <SingleMonth path="January" />
          <SingleMonth path="February" />
          <SingleMonth path="March" />
          <SingleMonth path="April" />
          <SingleMonth path="May" />
          <SingleMonth path="June" />
        </VStack>{" "}
        <Box width="100%">
          <Image src={PublishArticles}></Image>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        marginTop={10}
        minChildWidth="10em"
        spacing="3em"
        textAlign="center"
        padding={10}
      >
        {" "}
        <Box width="100%">
          <Image src={OnlineArticles}></Image>
        </Box>
        <VStack margin="auto">
          <SingleMonth path="July" />
          <SingleMonth path="August" />
          <SingleMonth path="September" />
          <SingleMonth path="October" />
          <SingleMonth path="November" />
          <SingleMonth path="December" />
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Months;
