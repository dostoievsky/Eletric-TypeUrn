import styled from 'styled-components';

import urnaHUD from '../../assets/urnaHUD.svg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  border-radius: 2px;
  padding: 30px 20px;
  
`;

export const Background = styled.div`
  flex: 1;
  background: url(${urnaHUD});
  background-size: cover;
`;
