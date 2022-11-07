import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
  background: ${COLORS.WHITE};
  height: 100%;
  position: absolute;
  left: 10%;
  right: 10%;
  top: 0px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow-x: scroll;
`;

export const UsernameTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  font-weight: 500;
  color: ${COLORS.BLACK};
`;

export const UsernameTitleWrapper = styled.section`
  padding: 10px 5px;
`;

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: ${COLORS.PRIMARY};
`;

export const TitleWrapper = styled.section`
  padding: 5px;
  margin: 50px;
`;

export const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const GraphsRow = styled.div`
  width: 100%; 
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;

export const DoubleBox = styled.div`
  width: 70%;
  height: 300px;
  border-width: 1px;
  border-color: ${COLORS.BLACK};
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
  position: relative;
`;

export const Box = styled.div`
  width: 35%;
  height: 300px;
  border-width: 1px;
  border-color: ${COLORS.BLACK};
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
  position: relative;
`;

export const InfoIcon = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${COLORS.WHITE};
`;

export const InfoBoxTitle = styled.h1`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: ${COLORS.BLACK};
  margin-bottom: 10px;
`;

export const InfoTextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 90%;
`;

export const InfoTextLine = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const InfoBoxText = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: ${COLORS.BLACK};
  margin-left: 5px;
`;

export const ConfusionMatrix = styled.div`
  background: ${COLORS.WHITE};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MatrixColumn = styled.div`
  width: 100px;
  margin-left: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MatrixLegendColumn = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MatrixCell = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background: rgba(113, 68, 192, ${props => props.opacity});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MatrixText = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: ${COLORS.BLACK};
`;

export const MatrixLegend = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.BLACK};
  text-align: center;
`;