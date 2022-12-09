import React from 'react';
import { ArrowButton, Container
  , TextWrapper
  , UserText
  , UserId
  , IdWrapper
} from './styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { COLORS } from '../../../styles/colors';
import { useLocation, useNavigate } from "react-router-dom";

const UserInfo = props => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const handleClick = (user_id) => {
    navigate('/dashboard', { state :
      {
        id: state.id,
        first_name: state.first_name,
        user_id: user_id,
        model_id: model_id,
      }
    });
  }

  const { model_id, user_id, username, gender, preference, status, time } = props;

  return (
    <Container >
      <IdWrapper>
        <UserId>{user_id}</UserId>
      </IdWrapper>
      <TextWrapper>
        <UserText>{username}</UserText>
      </TextWrapper>
      <TextWrapper>
        <UserText>{gender}</UserText>
      </TextWrapper>
      <TextWrapper>
        <UserText>{preference}</UserText>
      </TextWrapper>
      <TextWrapper>
        <UserText
          color={
            status==="Aprovado" ?
              COLORS.LIKE :
              status==="Falhou" ?
                COLORS.DISLIKE :
                status==="Esperando treinamento" ?
                  COLORS.WARNING :
                  COLORS.BLACK
          }
          >{status}</UserText>
      </TextWrapper>
      <TextWrapper>
        <UserText>{time}</UserText>
      </TextWrapper>
      <ArrowButton onClick={() => handleClick(user_id)} disabled={status==="Esperando treinamento"}>
        <ArrowForwardIosIcon sx={{color: COLORS.BLACK, fontSize: "35px"}}/>
      </ArrowButton>
    </Container>
  );
};

export default UserInfo;