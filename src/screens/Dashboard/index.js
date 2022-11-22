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
  RankingText
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

const Dashboard = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleBack = (e) => {
    navigate('/main', { state : {id: state.id, first_name: state.first_name}});
  };

  const handleFoward = (e) => {
    navigate('/recommendation', { state : {id: state.id, first_name: state.first_name}})
  };

  const fetchPerformanceInfo = async () => {
    try {
      setLoading(true);
      const resp = await httpClient.get(`/performance/${state.id}`);
      setData(resp.data);
    } catch (error) {
      console.log(error)
      setLoading(false);
      alert('Ocorreu um erro!');
    }
  }

  useEffect(() => {
    fetchPerformanceInfo();
  }, [])


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
          <Box>
            <InfoBoxTitle>Curva ROC</InfoBoxTitle>
            { data &&
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
                  stroke={COLORS.PRIMARY}
                  activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 6 }} />
                <ReferenceLine
                  label="Linha referência"
                  stroke={COLORS.SECONDARY}
                  strokeDasharray="3 3"
                  segment={[{ x: 0, y: 0 }, { x: 1, y: 1 }]} />
              </LineChart>
            </ResponsiveContainer>
            } 
          </Box>
          <Box>
            <InfoBoxTitle>Informações de performance</InfoBoxTitle>
            { data &&
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
            }
          </Box>
            {/* <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon> */}
          <Box>
            { data &&
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
            }
          </Box>
        </GraphsRow>
        <GraphsRow>
          <Box>
            <InfoBoxTitle>Acurácia</InfoBoxTitle>
            { data &&
            <ResponsiveContainer>
              <LineChart
                  width={4500}
                  height={250}
                  data={data.data_accuracy}
              >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="iteration"/>
                <YAxis tickFormatter={(tick) => {
                  return `${tick*100}%`;
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
                }}/>
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke={COLORS.PRIMARY}
                  dot={{r:2}}
                  activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
                <Line
                  type="monotone"
                  dataKey="val_accuracy"
                  stroke={COLORS.SECONDARY}
                  dot={{r:2}}
                  activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
            }
            {/* <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon> */}
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
            {/* <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon> */}
          </Box>
          <Box>
            <InfoBoxTitle>Perda</InfoBoxTitle>
            { data &&
            <ResponsiveContainer>
              <LineChart
                width={4500}
                height={250}
                data={data.data_loss}
              >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="iteration" />
                <YAxis tickFormatter={(tick) => {
                  return `${tick*100}%`;
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
                }}/>
                <Line
                  type="monotone"
                  dataKey="loss"
                  stroke={COLORS.PRIMARY}
                  dot={{r:2}}
                  activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
                <Line
                  type="monotone"
                  dataKey="val_loss"
                  stroke={COLORS.SECONDARY}
                  dot={{r:2}}
                  activeDot={{ stroke: COLORS.DISLIKE, strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
            }
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