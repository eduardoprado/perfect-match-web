import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import { Container
  , PrimaryText, TextBox
} from './styles';

const Registration = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/main')
  };

  return (
    <Container>
        <TextBox>
            <PrimaryText>Criar conta</PrimaryText>
            <Button text='Entrar' bold onClick={handleStart}/>
        </TextBox>
    </Container>
  );
};

export default Registration;