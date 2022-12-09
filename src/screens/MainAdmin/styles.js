import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Background = styled.div`
  background: ${COLORS.ADMIN_PRIMARY};
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
`;

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
  color: ${COLORS.ADMIN_PRIMARY};
`;

export const TitleWrapper = styled.section`
  padding: 5px;
  margin: 50px;
`;

export const ListTitleContainer = styled.div`
    width: 90%;
    display: flex; 
    justify-content: left;
    align-items: center;
`;

export const TitleTextWrapper = styled.section`
  margin: 5px;
  width: 14%;
`;

export const ListText = styled.h1`
  font-size: 16px;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  color: ${COLORS.BLACK};
`;