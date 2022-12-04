import React, {useEffect, useState} from 'react';
import { Container,
  UsernameTitle,
  UsernameTitleWrapper,
  Title,
  TitleWrapper,
  Footer,
  Subtitle,
  SummaryWrapper,
  SummaryText,
  SummarySection,
  SummaryTitleText,
  SummaryTextSection,
  SummaryConclusionText,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/button';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { COLORS } from '../../styles/colors';
import TRAINED_STRINGS from './string';
import { LogoutButton } from '../../components/atoms/logoutButton';
import httpClient from '../../httpClient';
import { CircularProgress } from '@mui/material';

const status = {
  "data": "warning",
  "training": "failed",
  "performance": "approved",
  "overall": "approved"
}

const Trained = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrainMore = (e) => {
    navigate('/main', { state : {id: state.id, first_name: state.first_name}});
  };

  const handleDashboard = (e) => {
    navigate('/dashboard', { state })
  };

  const handleRecommendations = (e) => {
    navigate('/recommendation', { state : {id: state.id, first_name: state.first_name}})
  };

  const fetchSummaryInfo = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/trained/${state.id}`);
      setStatus(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Ocorreu um erro!');
    }
  }

  useEffect(() => {
    fetchSummaryInfo();
  }, [])

  const getCorrectIcon = (type) => {
    if (type === 'approved') {
      return(
        <CheckCircleIcon sx={{color: COLORS.LIKE, fontSize: "48px"}}/>
      )
    } if (type === 'warning') {
      return(
        <WarningAmberIcon sx={{color: COLORS.WARNING, fontSize: "48px"}}/>
      )
    } if (type === 'failed') {
      return(
        <WarningIcon sx={{color: COLORS.DISLIKE, fontSize: "48px"}}/>
      )
    } else {
      return (<></>)
    }    
  }

  return (
    <Container>
      <LogoutButton/>
      <UsernameTitleWrapper>
        <UsernameTitle> Bem vindo, {state && state.first_name}</UsernameTitle>
      </UsernameTitleWrapper>
      <TitleWrapper>
        <Title> Seu modelo foi treinado!</Title>
        <Subtitle> Veja a seguir um resumo dos resultados</Subtitle>
      </TitleWrapper>
      { status ?
        <SummaryWrapper>
          <SummarySection>
            {getCorrectIcon(status.data)}
            <SummaryTextSection>
              <SummaryTitleText>Escolha das imagens</SummaryTitleText>
              {
                status.data === 'approved' ?
                  <SummaryText>{TRAINED_STRINGS.data.approved}</SummaryText> :
                  status.data === 'warning' ? 
                    <SummaryText>{TRAINED_STRINGS.data.warning}</SummaryText> :
                    status.data === 'failed' ?
                      <SummaryText>{TRAINED_STRINGS.data.failed}</SummaryText> :
                      <></>
              }
            </SummaryTextSection>
          </SummarySection>
          <SummarySection>
            {getCorrectIcon(status.training)}
            <SummaryTextSection>
              <SummaryTitleText>Aprendizado do algorítimo</SummaryTitleText>
              {
                status.training === 'approved' ?
                  <SummaryText>{TRAINED_STRINGS.training.approved}</SummaryText> :
                  status.training === 'warning' ? 
                    <SummaryText>{TRAINED_STRINGS.training.warning}</SummaryText> :
                    status.training === 'failed' ?
                      <SummaryText>{TRAINED_STRINGS.training.failed}</SummaryText> :
                      <></>
              }
            </SummaryTextSection>
          </SummarySection>
          <SummarySection>
            {getCorrectIcon(status.performance)}
            <SummaryTextSection>
              <SummaryTitleText>Dados de performance</SummaryTitleText>
              {
                status.performance === 'approved' ?
                  <SummaryText>{TRAINED_STRINGS.performance.approved}</SummaryText> :
                  status.performance === 'warning' ? 
                    <SummaryText>{TRAINED_STRINGS.performance.warning}</SummaryText> :
                    status.performance === 'failed' ?
                      <SummaryText>{TRAINED_STRINGS.performance.failed}</SummaryText> :
                      <></>
              }
            </SummaryTextSection>
          </SummarySection>
          {
                status.overall === 'approved' ?
                  <SummaryConclusionText type={status.overall}>
                    {TRAINED_STRINGS.overall.approved}
                  </SummaryConclusionText> :
                  status.overall === 'warning' ? 
                    <SummaryConclusionText type={status.overall}>
                      {TRAINED_STRINGS.overall.warning}
                    </SummaryConclusionText> :
                    status.overall === 'failed' ?
                      <SummaryConclusionText type={status.overall}>
                        {TRAINED_STRINGS.overall.failed}
                      </SummaryConclusionText> :
                      <></>
          }
        </SummaryWrapper>
        :
        loading
          ? <CircularProgress size="60px" color="inherit"/>
          : <></>
        }
      <Footer>
        <Button text='Treinar mais' onClick={handleTrainMore} small/>
        <Button text='Ver resultados' onClick={handleDashboard} small/>
        <Button text='Ver recomendações' onClick={handleRecommendations} small/>
      </Footer>
    </Container>
  );
};

export default Trained;