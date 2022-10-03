import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import { Container
  , CreateAccountText, PrimaryText, QuestionsText, TextBox
} from './styles';

const Login = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/main')
  };

  const handleCreateAccount = () => {
    navigate('/registration')
  };

  return (
    <Container>
        <TextBox>
            <PrimaryText>Login</PrimaryText>
            <Button text='Entrar' bold onClick={handleStart}/>
            <QuestionsText>Não tem conta ainda?</QuestionsText>
            <CreateAccountText onClick={handleCreateAccount}>Criar conta</CreateAccountText>
        </TextBox>
    </Container>
  );
};

export default Login;