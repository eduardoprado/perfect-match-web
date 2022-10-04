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
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import { COLORS } from '../../styles/colors';
import { ProgressBar } from '../../components/atoms/progressBar';

const Dashboard = () => {

  const handleBack = (e) => {
    navigate('/main')
  };

  const handleFoward = (e) => {
    navigate('/recommendation')
  };

  const navigate = useNavigate();

  return (
    <Container>
        <UsernameTitleWrapper>
            <UsernameTitle> Bem vindo, Eduardo</UsernameTitle>
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
                <InfoBoxText>80 pessoas avaliadas</InfoBoxText>
              </InfoTextLine>
              <InfoTextLine>
                <CollectionsOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "24px"}}/>
                <InfoBoxText>124 imagens analisadas</InfoBoxText>
              </InfoTextLine>
              <ProgressBar completed={20} total={20} like nobackground/>
              <ProgressBar completed={100} total={100} nobackground/>
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