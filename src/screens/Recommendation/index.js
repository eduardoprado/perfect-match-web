import React, { useEffect, useState } from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
} from './styles';
import Card from '../../components/organism/card';
import { useLocation } from 'react-router-dom';
import { LogoutButton } from '../../components/atoms/logoutButton';
import httpClient from '../../httpClient';
import { CircularProgress } from '@mui/material';

const Recommendation = () => {
  const {state} = useLocation();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLike = () => {
    console.log('LIKE')
  }

  const handleDislike = () => {
    console.log('DISLIKE')
  }

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/recommendation/${state.id}`);
      const users = resp.data;
      setUsers(users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Ocorreu um erro!');
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <Container>
      <LogoutButton/>
      <UsernameTitleWrapper>
        <UsernameTitle> Bem vindo, {state && state.first_name}</UsernameTitle>
      </UsernameTitleWrapper>
      <TitleWrapper>
        <Title> Aqui estão os melhores usuários recomendados para você:</Title>
      </TitleWrapper>
     {users && !loading ?
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
      }
    </Container>
  );
};

export default Recommendation;