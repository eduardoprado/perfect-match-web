import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';


export const Container = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-top-width: ${props => props.border ? '2px' : '0px'};
    border-color: ${COLORS.BLACK};
    border-style: dashed;
    padding-top: 10px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
`;

export const CardName = styled.h1`
  font-size: 28px;
  text-align: center;
  color: ${COLORS.BLACK};
`;

export const CardNameWrapper = styled.section`
  padding: 10px 5px;
`;

export const Gender = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: ${COLORS.BLACK};
`;

export const GenderWrapper = styled.section`
  padding: 5px;
`;

export const Ranking = styled.h1`
  font-size: 56px;
  text-align: center;
  color: ${COLORS.BLACK};
`;

export const RankingWrapper = styled.section`
  padding: 2px;
  width: 15%;
`;

export const Likeability = styled.h1`
  font-size: 26px;
  text-align: center;
  font-weight: 400;
  color: ${COLORS.BLACK};
`;

export const LikeabilityWrapper = styled.section`
  padding: 2px;
  width: 15%;
  margin-left: 15px;
`;

export const ImageWrapper = styled.section`
  position: relative;
`;

export const CircularProgressWrapper = styled.section`
  position: absolute;
  left: 100;
  top: 2;
`;

export const UserImage = styled.img `
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;