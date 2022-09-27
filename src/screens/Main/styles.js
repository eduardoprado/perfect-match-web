import { color } from '@mui/system';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
    background: ${COLORS.WHITE};
    height: 100%;
    position: absolute;
    left: 25%;
    right: 25%;
    top: 0px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
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
`;