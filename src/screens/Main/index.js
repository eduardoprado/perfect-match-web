import React, { useEffect, useState } from 'react';
import { LikeButton } from '../../components/atoms/likeButton';
import { Container
    , UsernameTitle
    , UsernameTitleWrapper
    , Title
    , TitleWrapper
} from './styles';

const Main = () => {

  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Vamos encontrar seu par ideal?</Title>
        </TitleWrapper>
        <LikeButton big/>
    </Container>
  );
};

export default Main;