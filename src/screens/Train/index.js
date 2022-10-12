import React, {useState} from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { COLORS } from '../../styles/colors';

const Train = () => {
  const [percentage, setPercentage] = useState(0);
  const navigate = useNavigate();
  const {state} = useLocation();

  if (percentage === 100)
    navigate('/dashboard', { state });

  setInterval(() => {
        setPercentage(percentage+20);
    }, 1000);

  return (
    <Container>
      <UsernameTitleWrapper>
        <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
      </UsernameTitleWrapper>
      <TitleWrapper>
        <Title> Encontrando seu par ideal...</Title>
      </TitleWrapper>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            textColor: COLORS.PROGRESS,
            pathColor: COLORS.PROGRESS,
            trailColor: COLORS.PROGRESS_LIGHT,
          })}
        />
    </Container>
  );
};

export default Train;