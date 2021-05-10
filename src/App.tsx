/* eslint-disable import/extensions */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { InputProvider } from './hooks/input';
import Routes from './routes/index';
import HUD from './components/HUD';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <InputProvider>
    <Router>
      <Routes />
      <HUD />
      <GlobalStyle />
    </Router>
  </InputProvider>
);

export default App;
