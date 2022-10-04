import React from 'react';
import { Button } from '../../atoms/button';
import { DisikeButton } from '../../atoms/dislikeButton';
import { LikeButton } from '../../atoms/likeButton';
import { Container,
  CardName,
  CardNameWrapper,
  Gender,
  GenderWrapper,
  CardContainer,
  RankingWrapper,
  Ranking,
  LikeabilityWrapper,
  Likeability
} from './styles';

const  Card = props => {

  const { user, recommendation, picturesIndex } = props;

  return (
    <Container border={!!recommendation}>
        {recommendation 
        ? <RankingWrapper>
        <Ranking>{user.ranking}#</Ranking>
        </RankingWrapper>
        : <></>}
        <DisikeButton big={!recommendation} handleClick={props.handleDislike}/>
        <CardContainer>
            <CardNameWrapper>
              <CardName>{user.username}</CardName>
            </CardNameWrapper>
            <img src={user.pictures[picturesIndex]}/>
            <GenderWrapper>
              <Gender>{user.gender}</Gender>
            </GenderWrapper>
            {!recommendation ? <Button text='Mais fotos' small onClick={props.handleMorePicture}/> : <></>}
        </CardContainer>
        <LikeButton big={!recommendation} handleClick={props.handleLike}/>
        {recommendation 
        ? <LikeabilityWrapper>
            <Likeability>
              {`${user.likeability} \n
              chance de like`}
            </Likeability>
        </LikeabilityWrapper>
        : <></>}
    </Container>
  );
};

export default Card;