import React from 'react';
import { Container
    , UsernameTitle
    , UsernameTitleWrapper
    , Title
    , TitleWrapper
} from './styles';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Veja o desempenho do programa!</Title>
        </TitleWrapper>
    </Container>
  );
};

export default Dashboard;