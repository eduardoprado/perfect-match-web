import React from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
  Footer,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from '../../components/atoms/button';

const Train = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const handleTrained = (e) => {
    navigate('/trained', { state });
  };

  return (
    <Container>
      <UsernameTitleWrapper>
        <UsernameTitle> Bem vindo, {state && state.first_name}</UsernameTitle>
      </UsernameTitleWrapper>
      <TitleWrapper>
        <Title> Encontrando seu par ideal...</Title>
      </TitleWrapper>
      <CircularProgress size="60px" color="secondary"/>
      <Footer>
        <Button text='Treinado' onClick={handleTrained} opacity={0.6}/>
      </Footer>
    </Container>
  );
};

export default Train;