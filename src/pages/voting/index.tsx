import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Input from '../../components/Input';

import {useInput} from '../../hooks/input';
import BottomContent from '../../components/BottomContainer';

import { Container } from '../Landing/styles';
import { InputContent, TypeCandidate, InfoContainer, BottomContainer } from './styles';

interface VotingProps {
  sessionType?: 'Presidente' | 'Governador' | 'Senador';
  viewType?: 'true' | 'false';
}

const Voting: React.FC<VotingProps> = ({sessionType = 'Presidente', viewType = 'false'}) => {
  const [voto/*, setVoto*/] = useState <string[]>([]);
  const {message, addMessage} = useInput();
  // const [position, setPosition] = useState(0);
  const history = useHistory();

  const Sessions = {
    Presidente: 
      <InputContent>
        <Input message={voto[0]}/>
        <Input message={voto[1]}/>
      </InputContent>,
  
    Governador: 
    <InputContent>
      <Input message={voto[2]}/>
      <Input message={voto[3]}/>
      <Input message={voto[4]}/>
    </InputContent>,
  
    Senador: 
    <InputContent>
      <Input message={voto[5]}/>
      <Input message={voto[6]}/>
      <Input message={voto[7]}/>
    </InputContent>,
  };

  const Data = {
    true:
    <>
      <InfoContainer>
        <h1>Numero:</h1>
        <h1>Nome:</h1>
        <h1>Partido:</h1>
        <h1>Vice:</h1>
      </InfoContainer>
      <BottomContainer>
        <BottomContent Confirma='x' Corrige='y'/>
      </BottomContainer>
    </>
    ,
    false:
      <div></div>
    ,
  };
 
  useEffect(() => {
    if(message !== ''){
      switch (message) {
        
      }
    }
  }, [message, history, addMessage]);
  
  return (
    <Container>
      <h1>Seu voto para</h1>
      <TypeCandidate>{sessionType}</TypeCandidate>
      {Sessions[sessionType]}
      {Data[viewType]}
    </Container>
  );
};

export default Voting;

