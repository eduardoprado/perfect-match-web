import React from 'react';
import { Button } from '../../atoms/button';
import CircularProgress from '@mui/material/CircularProgress';
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
  Likeability,
  UserImage,
  ImageWrapper,
  CircularProgressWrapper
} from './styles';

const  Card = props => {

  const { user, recommendation, picturesIndex, loading } = props;

  return (
    <Container border={!!recommendation}>
        {recommendation 
        ? <RankingWrapper>
        <Ranking>{user.rank}#</Ranking>
        </RankingWrapper>
        : <></>}
        <DisikeButton
          big={!recommendation}
          handleClick={props.handleDislike}
          disabled={loading}
        />
        <CardContainer>
            <CardNameWrapper>
              <CardName>{!loading && user.username}</CardName>
            </CardNameWrapper>
            <GenderWrapper>
              <Gender>{!loading && user.gender}</Gender>
            </GenderWrapper>
            <ImageWrapper>
              <UserImage disabled={loading} src={user.pictures[picturesIndex]} alt=''/>

              {loading &&
                <CircularProgressWrapper>
                  <CircularProgress size={64}/>
                </CircularProgressWrapper>
              }
            </ImageWrapper>
            {!recommendation 
              ? <Button
                  disabled={user.pictures.length === 1}
                  text='Mais fotos'
                  small
                  onClick={props.handleMorePicture}
                />
              : <></>
            }
        </CardContainer>
        <LikeButton
          big={!recommendation}
          handleClick={props.handleLike}
          disabled={loading}
        />
        {recommendation 
        ? <LikeabilityWrapper>
            <Likeability>
              {`${user.likeability.toFixed(2)*100}% \n
              chance de like`}
            </Likeability>
        </LikeabilityWrapper>
        : <></>}
    </Container>
  );
};

export default Card;