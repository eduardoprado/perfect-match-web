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

export const Footer = styled.div`
  width: 80%;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;