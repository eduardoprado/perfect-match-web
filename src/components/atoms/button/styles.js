import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const ButtonStyled = styled.button`
  font-weight: ${props => (props.bold ? '600': '400')};
  font-size: ${props => (props.small ? '16px' : '32px')};
  background-color: ${props => props.color
    ? props.color
    : `${COLORS.PRIMARY}`};
  color: ${COLORS.WHITE};
  opacity: ${props => (props.opacity ? props.opacity : props.disabled ? 0.6: 1)};
  padding: 5px;
  margin: 20px;
  border-radius: 30px;
  width: ${props => (props.small ? '150px' : '300px')};
  height: ${props => (props.small ? '50px' : '90px')};
`;