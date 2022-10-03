import React from 'react';
import { Container
    , UsernameTitle
    , UsernameTitleWrapper
    , Title
    , TitleWrapper
} from './styles';
import Card from '../../components/organism/card';

const Recommendation = () => {

  const handleLike = () => {
    console.log('LIKE')
  }

  const handleDislike = () => {
    console.log('DISLIKE')
  }

  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Aqui estão os melhores usuários recomendados para você:</Title>
        </TitleWrapper>
        <Card
            recommendation
            username={'Dua Lipa'}
            gender={'female'}
            handleLike={handleLike}
            handleDislike={handleDislike}
            ranking={1}
            likeability={'98,12%'}
            />
         <Card
            recommendation
            username={'Serena Williams'}
            gender={'female'}
            handleLike={handleLike}
            handleDislike={handleDislike}
            ranking={2}
            likeability={'93,27%'}
            />
    </Container>
  );
};

export default Recommendation;