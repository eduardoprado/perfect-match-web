import React, { useEffect, useState } from 'react';
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

const Card = props => {

    const handleMorePicture = () => {
        console.log('OII');
      };

  return (
    <Container border={!!props.recommendation}>
        {props.recommendation 
        ? <RankingWrapper>
            <Ranking>{props.ranking}#</Ranking>
        </RankingWrapper>
        : <></>}
        <DisikeButton big={!props.recommendation} handleClick={props.handleDislike}/>
        <CardContainer>
            <CardNameWrapper>
                <CardName>{props.username}</CardName>
            </CardNameWrapper>
            <GenderWrapper>
                <Gender>{props.gender}</Gender>
            </GenderWrapper>
            <Button text='Mais fotos' small onClick={handleMorePicture}/>
        </CardContainer>
        <LikeButton big={!props.recommendation} handleClick={props.handleLike}/>
        {props.recommendation 
        ? <LikeabilityWrapper>
            <Likeability>
                {`${props.likeability} \n
                chance de like`}
            </Likeability>
        </LikeabilityWrapper>
        : <></>}
    </Container>
  );
};

export default Card;