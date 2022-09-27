import React from 'react';
import Dua from '../../assets/dua.png'
import Ryan from '../../assets/ryan_reynolds.png'
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import { Container
  , ImageLeft
  , ImageRight
  , TextBox
} from './styles';

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/main')
  };

  return (
    <Container>
        <ImageLeft src={Dua} />
        <ImageRight src={Ryan} />
        <TextBox>
            <h1 style={{marginTop: 40, textAlign: 'center'}}>Vamos encontrar seu par ideal?</h1>
            <h2 style={{fontWeight: 400, marginTop: 40, marginBottom: 40, textAlign: 'center'}}>1. Avalie os perfis desses famosos</h2>
            <h2 style={{fontWeight: 400, marginTop: 40, marginBottom: 40, textAlign: 'center'}}>2. Espere o programa calcular seu par ideal</h2>
            <h2 style={{fontWeight: 400, marginTop: 40, marginBottom: 40, textAlign: 'center'}}>3. Veja a recomendação das pessoas ideias para você</h2>
            <Button text='Começar' bold onClick={handleStart}/>
        </TextBox>
    </Container>
  );
};

export default Home;