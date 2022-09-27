import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
    width: 100%;
`;

export const ImageLeft = styled.img `
    height: 80vh;
    opacity: 60%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const ImageRight = styled.img `
    height: 80vh;
    opacity: 60%;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export const TextBox = styled.div`
    background: ${COLORS.WHITE};
    border-radius: 50px;
    display: flex;
    position: absolute;
    top: 100px;
    left: 25%;
    right: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;