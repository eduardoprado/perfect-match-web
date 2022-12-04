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

export const Subtitle = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  color: ${COLORS.BLACK};
  margin-top: 20px;
`;

export const TitleWrapper = styled.section`
  padding: 5px;
  margin: 50px;
`;

export const SummaryWrapper = styled.section`
  margin: 0px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;

export const SummarySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 30px 5px;
  width: 75%;
`;

export const SummaryTextSection = styled.div`
  margin-left: 20px;
`;

export const SummaryTitleText = styled.h1`
  font-size: 24px;
  color: ${COLORS.BLACK};
`;

export const SummaryText = styled.h1`
  font-size: 20px;
  color: ${COLORS.BLACK};
  font-weight: 500;
`;

export const SummaryConclusionText = styled.h1`
  width: 80%;
  font-size: 28px;
  margin-top: 20px;
  color: ${props => props.type === 'approved' ?
    COLORS.LIKE :
    props.type === 'warning' ?
      COLORS.WARNING :
      props.type === 'failed' ?
        COLORS.DISLIKE :
        COLORS.BLACK
    };
  text-align: center;
`;

export const Footer = styled.div`
  width: 80%;
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;