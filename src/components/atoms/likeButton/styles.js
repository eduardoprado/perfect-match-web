import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const LikeWrapper = styled.button`
    z-index: 1;
    background-color: ${COLORS.LIKE};

    margin: ${props => props.big ? '20px' : '5px'};
    box-shadow: 0 0 10px $darkLower;

    height: ${props => props.big ? '100px' : '70px'};
    width: ${props => props.big ? '100px' : '70px'};
    border-radius: ${props => props.big ? '50px' : '35px'};
    opacity: ${props => (props.disabled ? 0.6 : 1)};
`;