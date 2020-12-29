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
  const currentYear = new Date().getFullYear();
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]}>
      <SimpleGrid
        marginTop={10}
        minChildWidth="10em"
        spacing="2em"
        textAlign="center"
        padding={10}
      >
        <Box boxSize="100%">
          <Image src={OrganizedContent}></Image>
        </Box>
        <VStack textAlign="center" py={15} px={2} boxSize="100%">
          <Heading size="3xl" fontFamily="PT Sans" my={[5, 10]}>
            Read the best articles
          </Heading>
          <Text fontFamily="Open Sans" size="4xl" alignSelf="end">
            LinksForYou is a clean and organized site that contains links to
            engrossing articles of various topics like Programming, Science,
            Career, Health and much more!
          </Text>
        </VStack>
      </SimpleGrid>
      <Link to={`/${currentYear}`}>
        <Button
          bgColor="purple.500"
          color="white"
          fontSize="1.5em"
          padding={7}
          _hover={{ background: "purple.300" }}
          marginBottom={10}
        >
          Get Started
        </Button>
      </Link>
    </VStack>
  );
};

export default Home;
