import React from 'react';
import Router from './Routes/Router';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'
// import Loading from './constants/Loading';

function App() {
  return (
    <ChakraProvider>

      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
