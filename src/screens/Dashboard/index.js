import React from 'react';
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
  Line
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

const data_performance = {
  "f1_score": 0.7512,
  "precision": 0.6412,
  "recall": 0.7722,
}

const data_accuracy = [
  {
    iteration: 1,
    accuracy: 0.23,
    val_accuracy: 0.21,
  },
  {
    iteration: 2,
    accuracy: 0.22,
    val_accuracy: 0.24,
  },
  {
    iteration: 3,
    accuracy: 0.32,
    val_accuracy: 0.34,
  },
  {
    iteration: 4,
    accuracy: 0.37,
    val_accuracy: 0.43,
  },
  {
    iteration: 5,
    accuracy: 0.52,
    val_accuracy: 0.46,
  },
  {
    iteration: 6,
    accuracy: 0.61,
    val_accuracy: 0.51,
  },
  {
    iteration: 7,
    accuracy: 0.57,
    val_accuracy: 0.57,
  },
  {
    iteration: 8,
    accuracy: 0.55,
    val_accuracy: 0.58,
  },
  {
    iteration: 9,
    accuracy: 0.63,
    val_accuracy: 0.64,
  },
  {
    iteration: 10,
    accuracy: 0.64,
    val_accuracy: 0.69,
  },
  {
    iteration: 11,
    accuracy: 0.66,
    val_accuracy: 0.67,
  },
  {
    iteration: 12,
    accuracy: 0.69,
    val_accuracy: 0.71,
  },
  {
    iteration: 13,
    accuracy: 0.74,
    val_accuracy: 0.86,
  },
  {
    iteration: 14,
    accuracy: 0.79,
    val_accuracy: 0.89,
  },
  {
    iteration: 15,
    accuracy: 0.85,
    val_accuracy: 0.91,
  },
  {
    iteration: 16,
    accuracy: 0.90,
    val_accuracy: 0.90,
  },
  {
    iteration: 17,
    accuracy: 0.89,
    val_accuracy: 0.92,
  },
  {
    iteration: 18,
    accuracy: 0.92,
    val_accuracy: 0.9341,
  },
  {
    iteration: 19,
    accuracy: 0.95,
    val_accuracy: 0.9312,
  },
];

const data_loss = data_accuracy.slice().reverse()

const data_matrix = {
  "TP": 34,
  "FP": 2,
  "FN": 3,
  "TN": 14,
  "Total": 34,
}

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
          <Box>
            <InfoBoxTitle>AUC - ROC</InfoBoxTitle>
            <ResponsiveContainer>
              <LineChart
                  width={4500}
                  height={250}
                  data={data_accuracy}
              >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="iteration" />
                <YAxis tickFormatter={(tick) => {
                  return `${tick*100}%`;
                }}/>
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
                  activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }} />
                <Line
                  type="monotone"
                  dataKey="val_accuracy"
                  stroke={COLORS.SECONDARY}
                  activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </Box>
          <Box>
            <InfoBoxTitle>Informações de performance</InfoBoxTitle>
            <RankingBox>
              <RankigBarBox>
                <RankingText>{(data_performance.precision*100).toFixed(2)}%</RankingText>
                <RankigBar value={data_performance.precision}>
                  <InfoBoxText>Precisão</InfoBoxText>
                  <RadarOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "30px", marginTop: "20px"}}/>
                </RankigBar>
              </RankigBarBox>
              <RankigBarBox>
                <RankingText>{(data_performance.f1_score*100).toFixed(2)}%</RankingText>
                <RankigBar value={data_performance.f1_score}>
                  <InfoBoxText>F1-Score</InfoBoxText>
                  <SportsScoreTwoToneIcon sx={{color: COLORS.BLACK, fontSize: "32px", marginTop: "20px"}}/>
                </RankigBar>
              </RankigBarBox>
              <RankigBarBox>
                <RankingText>{(data_performance.recall*100).toFixed(2)}%</RankingText>
                <RankigBar value={data_performance.recall}>
                  <InfoBoxText>Recall</InfoBoxText>
                  <ReplayTwoToneIcon sx={{color: COLORS.BLACK, fontSize: "30px", marginTop: "20px"}}/>
                </RankigBar>
              </RankigBarBox>
            </RankingBox>
          </Box>
            {/* <InfoIcon>
              <InfoOutlinedIcon sx={{color: COLORS.BLACK, fontSize: "28px"}}/>
            </InfoIcon> */}
          <Box>
            <ConfusionMatrix>
              <MatrixLegendColumn>
                <MatrixLegend>Curtidas previstas</MatrixLegend>
                <MatrixLegend>Descurtidas previstas</MatrixLegend>
              </MatrixLegendColumn>
              <MatrixColumn>
                <MatrixLegend>Curtidas verdadeiras</MatrixLegend>
                <MatrixCell opacity={data_matrix.TP/data_matrix.Total}>
                  <MatrixText>{data_matrix.TP}</MatrixText>
                  <MatrixLegend>TP</MatrixLegend>
                </MatrixCell>
                <MatrixCell opacity={data_matrix.FN/data_matrix.Total}>
                  <MatrixText>{data_matrix.FN}</MatrixText>
                  <MatrixLegend>FN</MatrixLegend>
                </MatrixCell>
              </MatrixColumn>
              <MatrixColumn>
                <MatrixLegend>Descurtidas verdadeiras</MatrixLegend>
                <MatrixCell opacity={data_matrix.FP/data_matrix.Total}>
                  <MatrixText>{data_matrix.FP}</MatrixText>
                  <MatrixLegend>FP</MatrixLegend>
                </MatrixCell>
                <MatrixCell opacity={data_matrix.TN/data_matrix.Total}>
                  <MatrixText>{data_matrix.TN}</MatrixText>
                  <MatrixLegend>TN</MatrixLegend>
                </MatrixCell>
              </MatrixColumn>
            </ConfusionMatrix>
          </Box>
        </GraphsRow>
        <GraphsRow>
          <Box>
            <InfoBoxTitle>Acurácia</InfoBoxTitle>
            <ResponsiveContainer>
              <LineChart
                  width={4500}
                  height={250}
                  data={data_accuracy}
              >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="iteration" />
                <YAxis tickFormatter={(tick) => {
                  return `${tick*100}%`;
                }}/>
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
                  activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }} />
                <Line
                  type="monotone"
                  dataKey="val_accuracy"
                  stroke={COLORS.SECONDARY}
                  activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
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
            <ResponsiveContainer>
              <LineChart
                width={4500}
                height={250}
                data={data_loss}
              >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="iteration" />
                <YAxis tickFormatter={(tick) => {
                  return `${tick*100}%`;
                }}/>
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
                  activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }} />
                <Line
                  type="monotone"
                  dataKey="val_accuracy"
                  stroke={COLORS.SECONDARY}
                  activeDot={{ stroke: 'red', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
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