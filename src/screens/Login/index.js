import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import { Container
  , CreateAccountText, FormItem, FormItemInput, FormItemLabel, PrimaryText, QuestionsText, TextBox
} from './styles';

const initialFormData = Object.freeze({
  email: "",
  password: ""
});

const Login = () => {
  const navigate = useNavigate();

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.type]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/main')
  };

  const handleCreateAccount = () => {
    navigate('/registration')
  };

  return (
    <Container>
        <TextBox>
            <PrimaryText>Login</PrimaryText>
            <FormItem>
              <FormItemLabel>email:</FormItemLabel>
              <FormItemInput
                type="email"
                onChange={handleChange}
              />
            </FormItem>
            <FormItem>
              <FormItemLabel>senha:</FormItemLabel>
              <FormItemInput
                type="password"
                onChange={handleChange}
              />
            </FormItem>
            <Button text='Entrar' bold onClick={handleSubmit} type="submit"/>
            <QuestionsText>Não tem conta ainda?</QuestionsText>
            <CreateAccountText onClick={handleCreateAccount}>Criar conta</CreateAccountText>
        </TextBox>
    </Container>
  );
};

export default Login;
