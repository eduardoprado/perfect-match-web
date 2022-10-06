import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

// const users = [
//     {
//         'username': 'Arnold Schwarzenegger',
//         'gender': 'indeterminado',
//         'pictures': [
//             'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0001.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0002.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0003.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0004.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0005.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0006.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Arnold_Schwarzenegger/Arnold_Schwarzenegger_0007.jpg'
//         ]
//     },
//     {
//         'username': 'Brad Pitt',
//         'gender': 'homem',
//         'pictures': [
//             'https://perfect-match-pictures.s3.amazonaws.com/lfw/Brad_Pitt/Brad_Pitt_0001.jpg'
//         ]
//     },
//     {
//         'username': 'Serena Williams',
//         'gender': 'mulher',
//         'pictures': [
//             'https://perfect-match-pictures.s3.amazonaws.com/lfw/Serena_Williams/Serena_Williams_0001.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Serena_Williams/Serena_Williams_0002.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Serena_Williams/Serena_Williams_0003.jpg'
//             , 'https://perfect-match-pictures.s3.amazonaws.com/lfw/Serena_Williams/Serena_Williams_0004.jpg'
//         ]
//     },
// ]

const baseUrl = 'http://127.0.0.1:5000'

const Main = () => {
  const [people, setPeople] = useState(0);
  const [user, setUser] = useState(null);
  const [images, setImages] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [picturesIndex, setPicturesIndex] = useState(0);

  const navigate = useNavigate();

  const handleLike = () => {
    setPeople(people + 1);
    setLikes(likes + 1);
    setImages(images + user.pictures.length);
    setPicturesIndex(0);
    fetchUsers(4462);
  }

  const handleDislike = () => {
    setPeople(people + 1);
    setDislikes(dislikes + 1);
    setImages(images + user.pictures.length);
    setPicturesIndex(0);
    fetchUsers(4462);
  }

  const handleMorePicture = () => {
    const total_pictures = user.pictures.length
    if (total_pictures === picturesIndex + 1)
      setPicturesIndex(0);
    else
      setPicturesIndex(picturesIndex + 1);
  };

  const handleTrainButton = () => {
    navigate('/train');
  }

  const fetchUsers = async (user_id) => {
    const resp = await axios.get(`${baseUrl}/queue/${user_id}`)
    console.log("data:", resp.data);
    const user = resp.data;
    setUser(user);
  }

  useEffect(() => {
    fetchUsers(4462);
  }, [])


  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Vamos encontrar seu par ideal?</Title>
        </TitleWrapper>
        {!!user && <Card
          user={user}
          ranking={people}
          picturesIndex={picturesIndex}
          handleMorePicture={handleMorePicture}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />}
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