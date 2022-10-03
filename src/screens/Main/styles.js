import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
    background: ${COLORS.WHITE};
    height: 100%;
    position: absolute;
    left: 15%;
    right: 15%;
    top: 0px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
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

export const EvaluationContainer = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-top-width: 2px;
    border-color: ${COLORS.BLACK};
    border-style: dashed;
    padding-top: 10px;
    height: 200px;
`;

export const EvaluationTextWrapper = styled.section`
    padding: 5px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const EvaluationTitle = styled.h1`
    font-size: 36px;
    text-align: center;
    color: ${COLORS.BLACK};
`;

export const EvaluationContent = styled.h2`
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    color: ${COLORS.BLACK};
`;

export const EvaluationButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 125px;
    border-radius: 25px;
    margin-left: 30px;

    font-size: 24px;
    text-align: center;
    color: ${COLORS.WHITE};
    background: ${COLORS.PRIMARY};
    opacity: ${props =>props.disabled ? '40%' : '100%'}
`;

export const ProgressWrapper = styled.section`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`;

export const ProgressTitle = styled.h1`
    font-size: 24px;
    text-align: center;
    color: ${COLORS.BLACK};
`;

export const ProgressText = styled.h1`
    margin-top: 50px; 
    font-size: 24px;
    color: ${COLORS.BLACK};
    font-weight: 400;
`;

export const ProgressSmallText = styled.h2`
    font-size: 14px;
    color: ${COLORS.BLACK};
    font-weight: 400;
`;