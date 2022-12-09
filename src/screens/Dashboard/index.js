import React, { useEffect, useState } from 'react';
import { Container,
  UsernameTitle,
  TitleWrapper,
  Title,
  InfoTextWrapper,
  Footer,
  Box,
  GraphsRow,
  InfoBoxTitle,
  UsernameTitleWrapper,
  InfoBoxText,
  InfoTextLine,
  ConfusionMatrix,
  MatrixCell,
  MatrixColumn,
  MatrixText,
  MatrixLegend,
  MatrixLegendColumn,
  RankingBox,
  RankigBar,
  RankigBarBox,
  RankingText,
  Background
} from './styles';
import { CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine
} from 'recharts';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ReplayTwoToneIcon from '@mui/icons-material/ReplayTwoTone';
import SportsScoreTwoToneIcon from '@mui/icons-material/SportsScoreTwoTone';
import RadarOutlinedIcon from '@mui/icons-material/RadarOutlined';
import { COLORS } from '../../styles/colors';
import { ProgressBar } from '../../components/atoms/progressBar';
import { LogoutButton } from '../../components/atoms/logoutButton';
import httpClient from '../../httpClient';
import { CircularProgress } from '@mui/material';

const Dashboard = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleFail = async () => {
    const body = {
      "model_id": state.model_id,
      "status": "failed"
    }
    try {
      const resp = await httpClient.post(`/update_model/${state.id}`, body);
      const data = resp.data;
      console.log(data);
    } catch (error) {
      alert('Ocorreu um erro!');
    }
    navigate('/main-admin', { state })
  };

  const handleBack = (e) => {
    navigate('/main-admin', { state })
  };

  const handleApprove = async () => {
    const body = {
      "model_id": state.model_id,
      "status": "approved"
    }
    try {
      const resp = await httpClient.post(`/update_model/${state.id}`, body);
      const data = resp.data;
      console.log(data);
    } catch (error) {
      alert('Ocorreu um erro!');
    }
    navigate('/main-admin', { state })
  };

  const fetchPerformanceInfo = async () => {
    try {
      setLoading(true);
      const resp_performance = await httpClient.get(`/performance/${state.user_id}`);
      const resp_user = await httpClient.get(`/user/${state.user_id}`);
      setData(resp_performance.data);
      setUserData(resp_user.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert('Ocorreu um erro!');
    }
  }

  useEffect(() => {
    fetchPerformanceInfo();
  }, [])


  return (
    <Background>
      <Container>
          <LogoutButton admin/>
          <UsernameTitleWrapper>
              <UsernameTitle> Conta admin - {state && state.first_name}</UsernameTitle>
          </UsernameTitleWrapper>
          <TitleWrapper>
              <Title> Aqui está o desempenho de: {userData && userData.username}</Title>
          </TitleWrapper>
          <GraphsRow>
            <Box>
              <InfoBoxTitle>Curva ROC</InfoBoxTitle>
              { data && !loading ?
              <ResponsiveContainer>
                <LineChart
                    width={4500}
                    height={250}
                    data={data.roc_curve_data}
                >
                  <CartesianGrid strokeDasharray="4 1" />
                  <XAxis
                    dataKey="fpr"
                    type="number"
                    tickFormatter={(tick) => {
                      return tick.toFixed(2);
                    }}/>
                  <YAxis
                    domain={['auto', 'auto']}
                  />
                  <Tooltip 
                  labelFormatter = {(label) => {
                    return `Taxa de falso positivo: ${label.toFixed(4)}`;
                  }}
                  label='teste'
                  formatter={(value) => {
                    return [`${value.toFixed(4)}`, 'Taxa de positivos reais'];
                  }}/>
                  <Line
                    type="monotone"
                    dataKey="tpr"
                    stroke={COLORS.ADMIN_PRIMARY}
                    activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 6 }} />
                  <ReferenceLine
                    label="Linha referência"
                    stroke={COLORS.ADMIN_SECONDARY}
                    strokeDasharray="3 3"
                    segment={[{ x: 0, y: 0 }, { x: 1, y: 1 }]} />
                </LineChart>
              </ResponsiveContainer>
              : <CircularProgress size="40px" color="inherit"/>
              } 
            </Box>
            <Box>
              <InfoBoxTitle>Informações de performance</InfoBoxTitle>
              { data && !loading ?
              <RankingBox>
                <RankigBarBox>
                  <RankingText>{(data.performance_data.precision*100).toFixed(2)}%</RankingText>
                  <RankigBar value={data.performance_data.precision}>
                    <InfoBoxText>Precisão</InfoBoxText>
                    <RadarOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "30px", marginTop: "20px"}}/>
                  </RankigBar>
                </RankigBarBox>
                <RankigBarBox>
                  <RankingText>{(data.performance_data.f1_score*100).toFixed(2)}%</RankingText>
                  <RankigBar value={data.performance_data.f1_score}>
                    <InfoBoxText>F1-Score</InfoBoxText>
                    <SportsScoreTwoToneIcon sx={{color: COLORS.BLACK, fontSize: "32px", marginTop: "20px"}}/>
                  </RankigBar>
                </RankigBarBox>
                <RankigBarBox>
                  <RankingText>{(data.performance_data.recall*100).toFixed(2)}%</RankingText>
                  <RankigBar value={data.performance_data.recall}>
                    <InfoBoxText>Recall</InfoBoxText>
                    <ReplayTwoToneIcon sx={{color: COLORS.BLACK, fontSize: "30px", marginTop: "20px"}}/>
                  </RankigBar>
                </RankigBarBox>
              </RankingBox>
              : <CircularProgress size="40px" color="inherit"/>
              }
            </Box>
            <Box>
              { data && !loading ?
              <ConfusionMatrix>
                <MatrixLegendColumn>
                  <MatrixLegend>Curtidas previstas</MatrixLegend>
                  <MatrixLegend>Descurtidas previstas</MatrixLegend>
                </MatrixLegendColumn>
                <MatrixColumn>
                  <MatrixLegend>Curtidas verdadeiras</MatrixLegend>
                  <MatrixCell opacity={data.conf_matrix_data.TP/data.conf_matrix_data.Total}>
                    <MatrixText>{data.conf_matrix_data.TP}</MatrixText>
                    <MatrixLegend>TP</MatrixLegend>
                  </MatrixCell>
                  <MatrixCell opacity={data.conf_matrix_data.FN/data.conf_matrix_data.Total}>
                    <MatrixText>{data.conf_matrix_data.FN}</MatrixText>
                    <MatrixLegend>FN</MatrixLegend>
                  </MatrixCell>
                </MatrixColumn>
                <MatrixColumn>
                  <MatrixLegend>Descurtidas verdadeiras</MatrixLegend>
                  <MatrixCell opacity={data.conf_matrix_data.FP/data.conf_matrix_data.Total}>
                    <MatrixText>{data.conf_matrix_data.FP}</MatrixText>
                    <MatrixLegend>FP</MatrixLegend>
                  </MatrixCell>
                  <MatrixCell opacity={data.conf_matrix_data.TN/data.conf_matrix_data.Total}>
                    <MatrixText>{data.conf_matrix_data.TN}</MatrixText>
                    <MatrixLegend>TN</MatrixLegend>
                  </MatrixCell>
                </MatrixColumn>
              </ConfusionMatrix>
              : <CircularProgress size="40px" color="inherit"/>
              }
            </Box>
          </GraphsRow>
          <GraphsRow>
            <Box>
              <InfoBoxTitle>Acurácia</InfoBoxTitle>
              { data && !loading ?
              <ResponsiveContainer>
                <LineChart
                    width={4500}
                    height={250}
                    data={data.data_accuracy}
                >
                  <CartesianGrid strokeDasharray="4 1" />
                  <XAxis dataKey="iteration"/>
                  <YAxis tickFormatter={(tick) => {
                    const percentage_tick = tick*100
                    return `${percentage_tick.toFixed(0)}%`;
                  }}
                    domain={['dataMin', 1]}
                    ticks={[0.5,0.6,0.7,0.8,0.9,1]}
                  />
                  <Tooltip 
                  labelFormatter = {(label) => {
                    return `${label}ᵃ iteração`;
                  }}
                  formatter={(value) => {
                    const percentage_value = value*100
                    return `${percentage_value.toFixed(2)}%`;
                  }}/>
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke={COLORS.ADMIN_PRIMARY}
                    dot={{r:2}}
                    activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
                  <Line
                    type="monotone"
                    dataKey="val_accuracy"
                    stroke={COLORS.ADMIN_SECONDARY}
                    dot={{r:2}}
                    activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
              : <CircularProgress size="40px" color="inherit"/>
              }
            </Box>
            <Box>
              <InfoBoxTitle>Informações do treinamento</InfoBoxTitle>
              { userData && !loading ?
                <InfoTextWrapper>
                  <InfoTextLine>
                    <PersonOutlineOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "24px"}}/>
                    <InfoBoxText>{userData.total_people} pessoas avaliadas</InfoBoxText>
                  </InfoTextLine>
                  <InfoTextLine>
                    <CollectionsOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "24px"}}/>
                    <InfoBoxText>{userData.total_images} imagens analisadas</InfoBoxText>
                  </InfoTextLine>
                  <>
                    <ProgressBar
                      completed={userData.total_likes/(userData.total_likes+userData.total_dislikes)*100}
                      total={userData.total_likes}
                      like
                      nobackground
                    />
                    <ProgressBar
                      completed={userData.total_dislikes/(userData.total_likes+userData.total_dislikes)*100}
                      total={userData.total_dislikes}
                      nobackground
                    />
                  </>
                                  </InfoTextWrapper>
               : <CircularProgress size="40px" color="inherit"/>
              }
            </Box>
            <Box>
              <InfoBoxTitle>Perda</InfoBoxTitle>
              { data && !loading ?
              <ResponsiveContainer>
                <LineChart
                  width={4500}
                  height={250}
                  data={data.data_loss}
                >
                  <CartesianGrid strokeDasharray="4 1" />
                  <XAxis dataKey="iteration" />
                  <YAxis tickFormatter={(tick) => {
                    const percentage_tick = tick*100
                    return `${percentage_tick.toFixed(0)}%`;
                  }}
                    domain={['auto', 'auto']}
                  />
                  <Tooltip 
                    labelFormatter = {(label) => {
                      return `${label}ᵃ iteração`;
                    }}
                    formatter={(value) => {
                      const percentage_value = value*100
                      return `${percentage_value.toFixed(2)}%`;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="loss"
                    stroke={COLORS.ADMIN_PRIMARY}
                    dot={{r:2}}
                    activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
                  <Line
                    type="monotone"
                    dataKey="val_loss"
                    stroke={COLORS.ADMIN_SECONDARY}
                    dot={{r:2}}
                    activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
              : <CircularProgress size="40px" color="inherit"/>
              }
            </Box>
          </GraphsRow>
          <Footer>
            <Button text='Recusar' onClick={handleFail} small color={COLORS.DISLIKE}/>
            <Button text='Ver outros usuários' onClick={handleBack} small color={COLORS.ADMIN_PRIMARY}/>
            <Button text='Aprovar' onClick={handleApprove} small color={COLORS.LIKE}/>
          </Footer>
      </Container>
    </Background>
  );
};

export default Dashboard;