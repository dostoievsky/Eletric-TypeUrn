import React from 'react';

import { Container, Content} from './styles';

interface BottomContainerProps{
  Confirma: string;
  Corrige: string;
  Branco?: string;
}

const BottomContainer: React.FC<BottomContainerProps> = ({Confirma, Corrige, Branco = ''}) => {
  return (
    <Container>
      <Content>
        <h1>Aperte a tecla</h1>
        <h1>CONFIRMA para {Confirma}</h1>
        <h1>CORRIGE para {Corrige}</h1>
        <h1>Branco para {Branco}</h1>
      </Content>
    </Container>
  );
};

export default BottomContainer;