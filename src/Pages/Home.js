import React from "react";
import OrganizedContent from "../images/OrganizedContent.svg";
import {
  Image,
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]} overflowY="hidden">
      <SimpleGrid
        marginTop="5em"
        minChildWidth="10em"
        spacing="2em"
        textAlign="center"
        padding={10}
      >
        <Box boxSize="100%">
          <Image src={OrganizedContent}></Image>
        </Box>
        <VStack textAlign="center" py={15} px={2} boxSize="100%">
          <Heading size="2xl" my={[5, 10]} fontFamily="Josefin Sans">
            Read the best articles and watch the best videos.
          </Heading>
          <Text size="2xl" alignSelf="end" fontFamily="Josefin Sans">
            LinksForYou is a clean and organized site that contains links to
            engrossing articles and videos of various topics like Programming,
            Science, Career, Health and much more!
          </Text>
        </VStack>
      </SimpleGrid>
      <Link to={`/months`}>
        <Button
          bgColor="purple.500"
          color="white"
          fontSize="1.5em"
          padding={7}
          _hover={{ background: "purple.300" }}
          marginBottom={10}
          fontFamily="Josefin Sans"
        >
          Get Started
        </Button>
      </Link>
    </VStack>
  );
};

export default Home;
