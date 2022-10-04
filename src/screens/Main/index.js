import React, { useState } from 'react';
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

const users = [
    {
        'username': 'Arnold Schwarzenegger',
        'gender': 'indeterminado',
        'pictures': [
            'https://cdn.ome.lt/neRSu76CVHL0ObcXyumE9wAW-LQ=/fit-in/837x500/smart/uploads/conteudo/fotos/arnold_1.jpg'
            , 'http://1.bp.blogspot.com/-4LQpBhXxUyY/T1dIgfXAr3I/AAAAAAAABgc/GZc67Pttj0Q/s280/arnold-32775_200x200.jpg'
        ]
    },
    {
        'username': 'Brad Pitt',
        'gender': 'homem',
        'pictures': [
            'https://img.r7.com/images/brad-pitt-02082022184414803?dimensions=200x200&crop_position=c'
        ]
    },
    {
        'username': 'Scarlett Johansson',
        'gender': 'mulher',
        'pictures': [
            'https://static1.purebreak.com.br/articles/4/42/04/@/23837-scarlett-johansson-200x200-2.jpg'
            , 'https://avatarfiles.alphacoders.com/154/thumb-154087.jpg'
            , 'https://media.vanityfair.com/photos/58dab0903753ee611fd24790/1:1/w_200,h_200,c_limit/Scarlett-Johansson.jpg'
            , 'https://i0.wp.com/whedonsworld.com/wp-content/uploads/2020/04/scarlett.jpg?fit=200%2C200&ssl=1'
        ]
    },
]

const Main = () => {
  const [people, setPeople] = useState(0);
  const [images, setImages] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [picturesIndex, setPicturesIndex] = useState(0);

  const navigate = useNavigate();

  const handleLike = () => {
    const total_people = users.length
    if (total_people === people + 1)
      setPeople(0);
    else
      setPeople(people + 1);
    setLikes(likes + 1)
    setImages(images + 3)
    setPicturesIndex(0)
  }

  const handleDislike = () => {
    const total_people = users.length
    if (total_people === people + 1)
      setPeople(0);
    else
      setPeople(people + 1);
    setDislikes(dislikes + 1)
    setImages(images + 3)
    setPicturesIndex(0)
  }

  const handleMorePicture = () => {
    const total_pictures = users[people].pictures.length
    if (total_pictures === picturesIndex + 1)
      setPicturesIndex(0);
    else
      setPicturesIndex(picturesIndex + 1);
  };

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
        <Card
          user={users[people]}
          ranking={people}
          picturesIndex={picturesIndex}
          handleMorePicture={handleMorePicture}
          handleLike={handleLike}
          handleDislike={handleDislike}
        />
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