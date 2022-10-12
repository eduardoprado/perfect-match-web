import React from 'react';
import { Container,
  UsernameTitle,
  TitleWrapper,
  Title,
  InfoTextWrapper,
  Footer,
  Box,
  GraphsRow,
  DoubleBox,
  InfoIcon,
  InfoBoxTitle,
  UsernameTitleWrapper,
  InfoBoxText,
  InfoTextLine
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { COLORS } from '../../styles/colors';
import { ProgressBar } from '../../components/atoms/progressBar';
import { LogoutButton } from '../../components/atoms/logoutButton';

const Dashboard = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const handleBack = (e) => {
    navigate('/main', { state : {id: state.id, first_name: state.first_name}});
  };

  const handleFoward = (e) => {
    navigate('/recommendation', { state : {id: state.id, first_name: state.first_name}})
  };


  return (
    <Container>
        <LogoutButton/>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, {state && state.first_name}</UsernameTitle>
        </UsernameTitleWrapper>
        <TitleWrapper>
            <Title> Veja o desempenho do programa!</Title>
        </TitleWrapper>
        <GraphsRow>
          <DoubleBox>
            <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon>
          </DoubleBox>
          <Box>
            <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon>
          </Box>
        </GraphsRow>
        <GraphsRow>
          <Box>
            <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon>
          </Box>
          <Box>
            <InfoBoxTitle>Informações do treinamento</InfoBoxTitle>
            <InfoTextWrapper>
              <InfoTextLine>
                <PersonOutlineOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "24px"}}/>
                <InfoBoxText>{state && state.people} pessoas avaliadas</InfoBoxText>
              </InfoTextLine>
              <InfoTextLine>
                <CollectionsOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "24px"}}/>
                <InfoBoxText>{state && state.images} imagens analisadas</InfoBoxText>
              </InfoTextLine>
              { state && 
              <>
                <ProgressBar
                  completed={state.likes/(state.likes+state.dislikes)*100}
                  total={state.likes}
                  like
                  nobackground
                />
                <ProgressBar
                  completed={state.dislikes/(state.likes+state.dislikes)*100}
                  total={state.dislikes}
                  nobackground
                />
              </>
              }
            </InfoTextWrapper>
            <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon>
          </Box>
          <Box>
            <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon>
          </Box>
        </GraphsRow>
        <Footer>
          <Button text='Treinar mais' onClick={handleBack} small/>
          <Button text='Ver recomendações' onClick={handleFoward} small/>
        </Footer>
    </Container>
  );
};

export default Dashboard;