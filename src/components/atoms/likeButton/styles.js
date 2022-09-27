import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const LikeWrapper = styled.button`
    z-index: 1;
    background-color: ${COLORS.LIKE};

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 20px;
    box-shadow: 0 0 10px $darkLower;

    height: ${props => props.big ? '100px' : '70px'};
    width: ${props => props.big ? '100px' : '70px'};
    border-radius: ${props => props.big ? '50px' : '35px'};
`;