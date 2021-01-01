import { Skeleton, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import SingleLink from "../components/SingleLink";
const Links = () => {
  const [allLinks, setAllLinks] = useState([]);
  const [linksArrayReceived, setLinksArrayReceived] = useState(false);
  const { url } = useRouteMatch();
  useEffect(() => {
    const month = url.split("/")?.[2];
    axios
      .get(`https://linksforyou.herokuapp.com/months/${month}`)
      .then((response) => {
        const arrayOfLinks = response.data[0].links;
        const reversedArray = arrayOfLinks.reverse();
        setAllLinks(reversedArray);
        setLinksArrayReceived(true);
      })
      .catch((error) => console.log(error));
  }, [url]);

  if (allLinks.length === 0 && !linksArrayReceived) {
    return (
      <Skeleton
        mx={["10%", "13%", "16%", "20%"]}
        marginTop={10}
        overflowY="hidden"
        height="100px"
        colorScheme="purple.500"
      ></Skeleton>
    );
  }
  return (
    <VStack mx={["10%", "13%", "16%", "20%"]} marginTop={10} overflowY="hidden">
      {allLinks.map((currentLink) => {
        return (
          <SingleLink
            key={currentLink._id}
            tag={currentLink.tag}
            name={currentLink.name}
            url={currentLink.url}
          />
        );
      })}
    </VStack>
  );
};

export default Links;
