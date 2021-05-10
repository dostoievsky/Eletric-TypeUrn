import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";

import {useInput} from '../../hooks/input';
import Input from '../../components/Input'

import Api from '../../services/API';

import { Container } from '../Landing/styles';
import { Content } from './styles';


const Validate: React.FC = () => {
  const {message, addMessage} = useInput();
  const history = useHistory();
  const [error, setError] = useState('');
  const [position, setPosition] = useState(0);
  const [CPF, setCPF] = useState <string[]>([]);

  const clearError = useCallback(() => {
    const timer = setTimeout(() => {
      setError('');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [setError]);
  
  const handleValidate = useCallback(async (completo: string) => {
    const response = await Api.get(
      '/validate',
      {headers: {cpf: completo}},
    ).catch(() => {
      setError('ERRO NO BACKEND!');
      clearError();
    });
    console.log({response}, 'RESPONSE');
    if (!!{response}) {
      addMessage('');
      history.push('/voting');
    }else{
      setError('CPF JÁ VOTOU!');
      clearError();
    }
  }, [addMessage, clearError, history]);
  
  const changeValue = useCallback(() => {
    setCPF((state) => [...state, message]);;
    setPosition(position+1);
  }, [message, position]);
  
  useEffect(() => {
    if(message !== ''){
      if (message === 'B'){
        addMessage('');
        history.push('/');
      }else if(message === 'Cr'){
        setCPF((state) => state.filter((message) => message === null));
        addMessage('');
        setPosition(0);
      }else if (message === 'Cf'){
        addMessage('');
        if (position !== 11) {
          setError('CPF INVALIDO!');
          clearError();
        }else{
          let valida = 0;
          let temp = 10;
          for (let i = 0; i < 9; i++) {
            valida += temp * parseInt(CPF[i], 10);
            temp--;
          }
          if ((valida*10) % 11 === 10) {
            valida = 0;
          }else{
            valida = (valida*10) % 11;
          }
          if (valida === parseInt(CPF[9], 10)) {
            temp = 11;
            valida = 0;
            for (let i = 0; i <= 9; i++) {
              valida += temp * parseInt(CPF[i], 10);
              temp--;
            }
            if ((valida*10) % 11 === parseInt(CPF[10], 10)){
              let completo = '';
              for (let i = 0; i <= 10; i++) {
                completo += CPF[i];
              }
              handleValidate(completo);
            }else{
              setError('CPF INVALIDO!');
              clearError();
            }
          }else{
            setError('CPF INVALIDO!');
            clearError();
          }
        }
      }else if (position < 11){
        changeValue();
        addMessage('');
      }
    }
  }, [CPF, addMessage, changeValue, clearError, handleValidate, history, message, position]);


  return (
    <Container>
      <h1>Validação</h1>
      <h1>Insira o seu CPF:</h1>   
      <Content>
        <Input message={CPF[0]}/>
        <Input message={CPF[1]}/>
        <Input message={CPF[2]}/>
        <Input message={CPF[3]}/>
        <Input message={CPF[4]}/>
        <Input message={CPF[5]}/>
        <Input message={CPF[6]}/>
        <Input message={CPF[7]}/>
        <Input message={CPF[8]}/>
        <Input message={CPF[9]}/>
        <Input message={CPF[10]}/>
      </Content>
      <h2>{error}</h2>
    </Container>
  );
};

export default Validate;
