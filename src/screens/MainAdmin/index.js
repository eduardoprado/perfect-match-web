import React, { useEffect, useState } from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
  Background,
} from './styles';
import { useLocation } from 'react-router-dom';
import { LogoutButton } from '../../components/atoms/logoutButton';
import httpClient from '../../httpClient';
import { CircularProgress } from '@mui/material';
import UserInfo from '../../components/organism/user_info';

const users_mock = [
  {
    "user_id": 5725,
    "username": "Eduardo Prado",
    "gender": "male",
    "preference": "female",
    "status": "Aprovado",
    "waiting_time": "25 min",
  },
  {
    "user_id": 1212,
    "username": "Jorge Amado",
    "gender": "female",
    "preference": "female",
    "status": "Falhou",
    "waiting_time": "-",
  },
  {
    "user_id": 421312,
    "username": "Luiza Richetenstof",
    "gender": "others",
    "preference": "all",
    "status": "Esperando treinamento",
    "waiting_time": "1h25 min",
  },
]

const MainAdmin = () => {
  const {state} = useLocation();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  // const fetchUsers = async () => {
  //   try {
  //     setLoading(true);
  //     const resp = await httpClient.get(`/recommendation/${state.id}`);
  //     const users = resp.data;
  //     setUsers(users);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     alert('Ocorreu um erro!');
  //   }
  // }

  // useEffect(() => {
  //   fetchUsers();
  // }, [])
  

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
        <ul style={{width: "100%"}}>
          {users_mock.map((user) => 
            <UserInfo
              user_id={user.user_id}
              username={user.username}
              gender={user.gender}
              preference={user.preference}
              status={user.status}
              time={user.waiting_time}
            />
          )}
        </ul>
       {/* {users && !loading ?
        <ul>
          {users.map((user) => 
            <Card
              recommendation
              user={user}
              handleLike={handleLike}
              handleDislike={handleDislike}
              picturesIndex={0}
            />
          )}
        </ul>
        : <CircularProgress size="40px" color="inherit"/>
        } */}
      </Container>
    </Background>
  );
};

export default MainAdmin;