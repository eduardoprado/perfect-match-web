import React, { useEffect, useState } from 'react';
import Card from '../../components/organism/card';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Container,
    UsernameTitle,
    UsernameTitleWrapper,
    Title,
    TitleWrapper,
    EvaluationTextWrapper,
    EvaluationTitle,
    EvaluationContent,
    EvaluationButton,
    EvaluationContainer,
    ProgressWrapper,
    ProgressTitle,
    ProgressText,
    ProgressSmallText
} from './styles';
import { ProgressBar } from '../../components/atoms/progressBar';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [people, setPeople] = useState(0);
  const [images, setImages] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const navigate = useNavigate();

  const handleLike = () => {
    setLikes(likes + 1)
    setPeople(people + 1)
    setImages(images + 3)
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1)
    setPeople(people + 1)
    setImages(images + 3)
  }

  const handleTrainButton = () => {
    navigate('/train')
  }


  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Vamos encontrar seu par ideal?</Title>
        </TitleWrapper>
        <Card username={'Arnold Schwarzenegger'} gender={'indeterminado'} handleLike={handleLike} handleDislike={handleDislike}/>
        <EvaluationContainer>
            <ProgressWrapper>
                {
                    likes < 20 | dislikes < 20 ?
                    <>
                        <ProgressText>Faltam:</ProgressText>
                        <ProgressBar completed={likes > 20 ? 100 : (likes*100/20)} total={likes > 20 ? 0 : 20-likes} like/>
                        <ProgressBar completed={dislikes > 20 ? 100 : (dislikes*100/20)} total={dislikes > 20 ? 0 : 20-dislikes}/>
                        <ProgressSmallText>para o modelo ter o mínimo de imagens para ser treinado</ProgressSmallText>
                    </>
                    : <ProgressTitle>Pronto para treinamento!</ProgressTitle>
                }

            </ProgressWrapper>
            <EvaluationTextWrapper>
                <EvaluationTitle>Avaliações</EvaluationTitle>
                <EvaluationContent>{people} pessoas</EvaluationContent>
                <EvaluationContent>{images} imagens</EvaluationContent>
            </EvaluationTextWrapper>
            <EvaluationButton onClick={handleTrainButton} disabled={likes < 20 | dislikes < 20}>
                <PsychologyIcon sx={{ fontSize: 60}}/>
                Treinar
            </EvaluationButton>
        </EvaluationContainer>
    </Container>
  );
};

export default Main;