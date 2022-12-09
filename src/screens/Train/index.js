import React, { useEffect, useState }  from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
  Footer,
  LoadingText,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from '../../components/atoms/button';
import httpClient from '../../httpClient';
import TRAIN_STRINGS from './strings';

const Train = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [textIndex, setTextIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);

  const handleSummary = (e) => {
    navigate('/summary', {state});
  };

  const fetchStatus = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/model_ready/${state.id}`);
      const status = resp.data["status"];
      if (status!=='pending') {
        await setFinished(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert('Ocorreu um erro, recarregar a página!');
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!finished) {
        setTextIndex(textIndex+1);
        fetchStatus();
      }
    }, 120000);
  
    return () => clearInterval(interval);
  }, [finished]);

  return (
    <Container>
      <UsernameTitleWrapper>
        <UsernameTitle> Bem vindo, {state && state.first_name}</UsernameTitle>
      </UsernameTitleWrapper>
      {loading ?
        <>
          <TitleWrapper>
            <Title> Encontrando seu par ideal...</Title>
          </TitleWrapper>
          <CircularProgress size="60px" color="secondary"/>
          <LoadingText>{TRAIN_STRINGS[textIndex]}</LoadingText>
        </>
        :
        <>
          <TitleWrapper>
            <Title> Parece que seu modelo foi treinado!</Title>
          </TitleWrapper>
          <LoadingText>Checa lá quais foram os resultados!</LoadingText>
        </>
      
      }
      <Footer>
        <Button text='Ver resultados' onClick={handleSummary} disabled={!finished}/>
      </Footer>
    </Container>
  );
};

export default Train;