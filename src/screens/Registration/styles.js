import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
`;

export const TextBox = styled.form`
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

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  margin-top: 15px;
  width: 100%;
`;

export const FormItemLabel = styled.label`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.BLACK};
  letter-spacing: 2px;
`;

export const RadioFormLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.BLACK};
  letter-spacing: 1px;
`;

export const FormItemInput = styled.input`
  height: 56px;
  background: ${COLORS.WHITE};
  border-color: ${COLORS.BLACK};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: 24px;
  color: ${COLORS.BLACK};
  margin-top: 5px;
`;

export const RadioItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const RadioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const RadioItemLabel = styled.label`
  font-size: 22px;
  font-weight: 400;
  color: ${COLORS.BLACK};
`;

export const RadioItemInput = styled.input`
    width: 40px;
    height: 40px;
    margin: 5px;
`;