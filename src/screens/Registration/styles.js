import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
`;

export const TextBox = styled.div`
    background: ${COLORS.WHITE};
    display: flex;
    position: absolute;
    top: 100px;
    left: 25%;
    right: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const PrimaryText = styled.h1`
    margin-top: 40px;
    text-align: center;
`;