import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './Pages/Home';
import Months from './Pages/Months';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Links from './Pages/Links';
import axios from 'axios';
import { useRouteMatch } from 'react-router-dom';

const App = () => {
  const [allLinks, setAllLinks] = useState([]);
  const [linksArrayReceived, setLinksArrayReceived] = useState(false);
  const { url } = useRouteMatch();
  useEffect(() => {
    const month = url.split('/')?.[2];
    axios
      .get(`https://linksforyou.herokuapp.com/months/${month}`)
      .then(response => {
        const arrayOfLinks = response.data[0].links;
        const reversedArray = arrayOfLinks.reverse();
        setAllLinks(reversedArray);
        setLinksArrayReceived(true);
      })
      .catch(error => console.log(error));
  }, [url]);
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={`/months`}>
          <Months />
        </Route>
        <Route path={`/months/:month`}>
          <Links allLinks={allLinks} linksArrayReceived={linksArrayReceived} />
        </Route>
      </Switch>
    </ChakraProvider>
  );
};

export default App;
