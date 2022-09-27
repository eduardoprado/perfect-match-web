import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const ButtonStyled = styled.button`
    font-weight: ${props => (props.bold ? '600': '400')};
    font-size: ${props => (props.small ? '18px' : '32px')};

    background-color: ${props => props.color
        ? props.color
        : `${COLORS.PRIMARY}`};
    color: ${COLORS.WHITE};
    opacity: ${props => (props.disabled ? 0.6 : 1)};

    padding: 2vh 2vw;
    margin: 20px;

    border-radius: 30px;
    
    width: ${props => (props.small ? '150px' : '300px')};
    height: ${props => (props.small ? '50px' : '90px')};
`;