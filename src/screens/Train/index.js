import React from 'react';
import { Container
    , UsernameTitle
    , UsernameTitleWrapper
    , Title
    , TitleWrapper
} from './styles';
import { useNavigate } from 'react-router-dom';

const Train = () => {

  const navigate = useNavigate();

  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Encontrando seu par ideal...</Title>
        </TitleWrapper>
    </Container>
  );
};

export default Train;