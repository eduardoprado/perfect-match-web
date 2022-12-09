import React, { useEffect, useState } from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
  Background,
  ListTitleContainer,
  TitleTextWrapper,
  ListText,
} from './styles';
import { useLocation } from 'react-router-dom';
import { LogoutButton } from '../../components/atoms/logoutButton';
import httpClient from '../../httpClient';
import { CircularProgress } from '@mui/material';
import UserInfo from '../../components/organism/user_info';

const MainAdmin = () => {
  const {state} = useLocation();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchModels = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/get_models`);
      const users = resp.data;
      setUsers(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Ocorreu um erro!');
    }
  }

  useEffect(() => {
    fetchModels();
  }, [])
  

  return (
    <Background>
      <Container>
        <LogoutButton admin={true}/>
        <UsernameTitleWrapper>
          <UsernameTitle> Bem vindo, {state.first_name}</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
          <Title> Aqui está a lista de usuários na fase de treinamento</Title>
        </TitleWrapper>
        <ListTitleContainer >
          <TitleTextWrapper>
            <ListText>Id do usuário</ListText>
          </TitleTextWrapper>
          <TitleTextWrapper>
            <ListText>Nome</ListText>
          </TitleTextWrapper>
          <TitleTextWrapper>
            <ListText>Gênero</ListText>
          </TitleTextWrapper>
          <TitleTextWrapper>
            <ListText>Preferência</ListText>
          </TitleTextWrapper>
          <TitleTextWrapper>
            <ListText>Status</ListText>
          </TitleTextWrapper>
          <TitleTextWrapper>
            <ListText>Tempo de espera</ListText>
          </TitleTextWrapper>
        </ListTitleContainer>
        {users && !loading ?
         <ul style={
            {
              width: "100%",
              display:'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }>
           {users.map((user) => 
              <UserInfo
                model_id={user.model_id}
                user_id={user.user_requested_id}
                username={user.username}
                gender={user.gender}
                preference={user.preference}
                status={user.status}
                time={user.waiting_time}
              />
           )}
         </ul>
         : <CircularProgress size="40px" color="inherit"/>
        }
      </Container>
    </Background>
  );
};

export default MainAdmin;