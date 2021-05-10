import React from 'react';

import ButtonContainer from '../ButtonContainer';

import { Container, Background } from './styles';

const HUD: React.FC = () => {
  return (
    <Container>
      <ButtonContainer/>
      <Background/>
    </Container>
  );
};

export default HUD;
