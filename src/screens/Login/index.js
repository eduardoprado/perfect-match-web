import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import httpClient from '../../httpClient';
import { Container
  , CreateAccountText
  , FormItem
  , FormItemInput
  , FormItemLabel
  , PrimaryText
  , QuestionsText
  , TextBox
  , ErrorText,
  SwitchPosition,
  Background
} from './styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { COLORS } from '../../styles/colors';

const initialFormData = Object.freeze({
  email: "",
  password: ""
});

const Login = () => {
  const navigate = useNavigate();

  const [formData, updateFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [hasClickedEnter, setHasClickedEnter] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.type]: e.target.value
    });
  };

  const handleAdminChange = (e) => {
    setAdmin(e.target.checked);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasClickedEnter(true);
    if (formData.email !== "" && formData.password !== "") {
      setLoading(true);
      try {
        if (admin) {
          const resp = await httpClient.post(`/login-admin`, formData);
          const id = resp.data.id;
          const first_name = resp.data.username.split(' ').slice(0,1).join('');
          navigate('/main-admin', { state : {id: id, first_name: first_name}});
        }
        else {
          const resp = await httpClient.post(`/login`, formData);
          const id = resp.data.id;
          const first_name = resp.data.username.split(' ').slice(0,1).join('');
          navigate('/main', { state : {id: id, first_name: first_name}});
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error && error.response.status === 401) {
          alert("Credencias inválidas");
        } else {
          alert("Usuário não encontrado");
        }
      }
    }
  };

  const handleCreateAccount = () => {
    navigate('/registration')
  };

  return (
    <Background admin={admin}>
      <Container>
          <TextBox>
              <PrimaryText>Login</PrimaryText>
              <SwitchPosition>
                <FormControlLabel
                  control={
                    <Switch onChange={handleAdminChange} />
                  }
                  label="Especialista"
                />
              </SwitchPosition>
              <FormItem>
                <FormItemLabel>email:</FormItemLabel>
                <FormItemInput
                  type="email"
                  onChange={handleChange}
                />
                {formData.email === "" &&  hasClickedEnter &&
                  <ErrorText>
                    Preencha seu email para entrar
                  </ErrorText>
                }
              </FormItem>
              <FormItem>
                <FormItemLabel>senha:</FormItemLabel>
                <FormItemInput
                  type="password"
                  onChange={handleChange}
                />
                {formData.password === "" &&  hasClickedEnter &&
                  <ErrorText>
                    Preencha sua senha para entrar
                  </ErrorText>
                }
              </FormItem>
              <Button
                loading={loading}
                text='Entrar'
                bold
                onClick={handleSubmit}
                type="submit"
                color={admin ? COLORS.ADMIN_PRIMARY : COLORS.PRIMARY}
              />
              <QuestionsText>Não tem conta ainda?</QuestionsText>
              <CreateAccountText onClick={handleCreateAccount}>Criar conta</CreateAccountText>
          </TextBox>
      </Container>
    </Background>
  );
};

export default Login;
