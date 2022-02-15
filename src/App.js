import React from 'react';
import Router from './Routes/Router';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'
// import Loading from './constants/Loading';

function App() {
  return (
    <div>
      <h1>home</h1>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
