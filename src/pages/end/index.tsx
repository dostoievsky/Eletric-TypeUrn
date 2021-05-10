import React from 'react';
import {TiBatteryCharge} from 'react-icons/ti';

import { Container } from './styles';
//BsBatteryHalf
const EndEscreen: React.FC = () => {
  const today = new Date();
  let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return (
    <Container>
      <h1>{date} {time}</h1>
      <TiBatteryCharge/>
      <h2>Votou</h2>
      <h3>FIM</h3>
    </Container>
  );
};

export default EndEscreen;

