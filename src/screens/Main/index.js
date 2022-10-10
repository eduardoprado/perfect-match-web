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
  ProgressSmallText,
  DeleteTrainingButton,
  EvaluationButtonWrapper
} from './styles';
import { ProgressBar } from '../../components/atoms/progressBar';
import { useNavigate, useLocation } from 'react-router-dom';
import httpClient from '../../httpClient';

const Main = () => {
  const {state} = useLocation();
  const [people, setPeople] = useState(0);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [images, setImages] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [picturesIndex, setPicturesIndex] = useState(0);

  const navigate = useNavigate();

  const handleLike = async () => {
    const body = {
      "user_id": state.id,
      "user_liked_id": user.user_queue_id
    }

    try {
      setLoading(true);
      const resp = await httpClient.post(`/like`, body);
      const liked = resp.data;
      if (!!liked.created_at) {
        setPeople(people + 1);
        setLikes(likes + 1);
        setImages(images + user.pictures.length);
        setPicturesIndex(0);
        fetchUsers();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Ocorreu um erro!');
    }
  };

  const handleDislike = async () => {
    const body = {
      "user_id": state.id,
      "user_disliked_id": user.user_queue_id
    }

    try {
      setLoading(true);
      const resp = await httpClient.post(`/dislike`, body);
      const disliked = resp.data;
      if (!!disliked.created_at) {
        setPeople(people + 1);
        setDislikes(dislikes + 1);
        setImages(images + user.pictures.length);
        setPicturesIndex(0);
        fetchUsers();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Ocorreu um erro!');
    }
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

  const fetchUserInfo = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/user/${state.id}`);
      const user_info = resp.data;
      setPeople(user_info.total_people);
      setImages(user_info.total_images);
      setLikes(user_info.total_likes);
      setDislikes(user_info.total_dislikes);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Ocorreu um erro!');
    }
  }

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/queue/${state.id}`);
      const user = resp.data;
      setUser(user);
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Ocorreu um erro!');
    }
  }

  const deleteTraining = async () => {
    try {
      setLoading(true);
      await httpClient.delete(`/delete_info/${state.id}`);
      setPeople(0);
      setImages(0);
      setLikes(0);
      setDislikes(0);
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Ocorreu um erro!');
    }
  }

  useEffect(() => {
    fetchUserInfo()
    fetchUsers();
  }, [])


  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, {state.first_name}</UsernameTitle>
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
          loading={loading}
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
            <EvaluationButtonWrapper>
              <EvaluationButton onClick={handleTrainButton} disabled={likes < 20 | dislikes < 20}>
                  <PsychologyIcon sx={{ fontSize: 60}}/>
                  Treinar
              </EvaluationButton>
              <DeleteTrainingButton onClick={deleteTraining} disabled={people === 0}>
                Recomeçar treinamento
              </DeleteTrainingButton>
            </EvaluationButtonWrapper>
        </EvaluationContainer>
    </Container>
  );
};

export default Main;