import React from 'react';
import Dua from '../../assets/dua.png'
import Ryan from '../../assets/ryan_reynolds.png'
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import { Container
  , ImageLeft
  , ImageRight
  , PrimaryText, SecondaryText, TextBox
} from './styles';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login')
  };

  return (
    <Container>
        <ImageLeft src={Dua} />
        <ImageRight src={Ryan} />
        <TextBox>
            <PrimaryText>Vamos encontrar seu par ideal?</PrimaryText>
            <SecondaryText>1. Avalie os perfis desses famosos</SecondaryText>
            <SecondaryText>2. Espere o programa calcular seu par ideal</SecondaryText>
            <SecondaryText>3. Veja a recomendação das pessoas ideias para você</SecondaryText>
            <Button text='Começar' bold onClick={handleStart}/>
        </TextBox>
    </Container>
  );
};

export default Home;