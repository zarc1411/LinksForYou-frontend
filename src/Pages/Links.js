import { VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import SingleLink from "../components/SingleLink";
const Links = () => {
  const [allLinks, setAllLinks] = useState([]);
  const { url } = useRouteMatch();
  useEffect(() => {
    const month = url.split("/")?.[2];
    axios
      .get(`https://linksforyou.herokuapp.com/months/${month}`)
      .then((response) => {
        const arrayOfLinks = response.data[0].links;
        const reversedArray = arrayOfLinks.reverse();
        setAllLinks(reversedArray);
      })
      .catch((error) => console.log(error));
  }, [url]);

  console.log(allLinks);
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]} marginTop={10} overflowY="hidden">
      {allLinks.map((currentLink) => (
        <SingleLink
          key={currentLink._id}
          tag={currentLink.tag}
          name={currentLink.name}
          url={currentLink.url}
        />
      ))}
    </VStack>
  );
};

export default Links;
