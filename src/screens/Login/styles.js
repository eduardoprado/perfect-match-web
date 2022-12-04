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

export const ErrorText = styled.span`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.DISLIKE};
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

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
`;

export const FormItemLabel = styled.label`
  font-size: 20px;
  font-weight: 400;
  color: ${COLORS.BLACK};
  letter-spacing: 2px;
`;

export const FormItemInput = styled.input`
  width: 100%;
  height: 64px;
  background: ${COLORS.WHITE};
  border-color: ${COLORS.BLACK};
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: 24px;
  color: ${COLORS.BLACK};
  margin-top: 5px;
`;