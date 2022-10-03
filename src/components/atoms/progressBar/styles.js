import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const OuterBar = styled.div`
    height: 30px;
    width: '100%';
    border-radius: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
    background-color: ${COLORS.LIGHT_GREY}
`;

export const InnerBar = styled.div`
    height: 100%;
    width: ${props => props.completed}%;
    background-color: ${props => props.like ? COLORS.LIKE : COLORS.DISLIKE};
    border-radius: inherit;
`;

export const Text = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    margin-left: 5px;
    font-size: 14;
    font-weight: 400;
    color: ${props => props.white ? COLORS.WHITE : COLORS.BLACK};
`;