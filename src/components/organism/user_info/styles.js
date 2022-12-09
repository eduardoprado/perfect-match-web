import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';


export const Container = styled.div`
    width: 90%;
    display: flex; 
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    border: 2px solid ${COLORS.BLACK};
    padding: 10px;
    margin: 10px;
`;

export const TextWrapper = styled.section`
  margin: 5px;
  width: 15%;
`;

export const IdWrapper = styled.section`
  margin: 5px;
  width: 10%;
`;

export const UserText = styled.h1`
  font-size: 18px;
  width: 100%;
  text-align: center;
  font-weight: 400;
  word-wrap: break-word;
  color: ${props => (props.color ? props.color : COLORS.BLACK)};
`;

export const UserId = styled.h1`
  font-size: 20px;
  width: 100%;
  text-align: center;
  color: ${COLORS.BLACK};
`;

export const ArrowButton = styled.button`
  display: flex; 
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.disabled ? 20 : 100)};
  background-color: ${COLORS.WHITE};
  opacity: ${props => (props.disabled ? 0.6 : 1)};\
  width: 60px;
  height: 40px;
`;