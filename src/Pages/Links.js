import { VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import SingleLink from "../components/SingleLink";
const Links = (props) => {
  const [allLinks, setAllLinks] = useState([]);
  const { url } = useRouteMatch();
  useEffect(() => {
    const month = url.split("/")?.[2];
    axios.get(`http://localhost:3001/${month}`).then((response) => {
      setAllLinks(response.data);
    });
  }, [url]);

  console.log(allLinks);
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]} marginTop={10} overflowY="hidden">
      <SingleLink
        tag="Programming"
        name="New Grads: don't worry too much about the perfect first job"
      />
      <SingleLink
        tag="Computer Science"
        name="How Claude Shannon Invented the Future"
      ></SingleLink>
      <SingleLink
        tag="Computer Science"
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
