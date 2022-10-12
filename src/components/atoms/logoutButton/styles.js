import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const LogoutButtonStyled = styled.button`
  position: absolute;
  right: 10px;
  top: 30px;
  padding-left: 5px;
  opacity: ${props => (props.disabled ? 20 : 100)};
  background-color: ${COLORS.PRIMARY};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  margin: 20px;
  border-radius: 30px;
  width: 60px;
  height: 40px;
`;