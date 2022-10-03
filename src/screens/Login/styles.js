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
    text-align: center;
    font-size: 48px;
`;

export const QuestionsText = styled.span`
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
`;

export const CreateAccountText = styled.button`
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
    background: ${COLORS.WHITE};
`;