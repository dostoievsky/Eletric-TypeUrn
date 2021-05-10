import React from 'react';

import { Container, Content} from './styles';

interface InputProps {
  message: string;
}

const Input: React.FC<InputProps> = ({message}) => {
  return (
    <Container>
      <Content>
        {message}
      </Content>
    </Container>
  );
};

export default Input;