import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/atoms/button';
import { Container,
  FormItem,
  FormItemInput,
  FormItemLabel,
  PrimaryText,
  TextBox,
  RadioItemLabel,
  RadioItem,
  RadioItemInput,
  RadioFormLabel,
  RadioItems,
} from './styles';
import httpClient from '../../httpClient';

const initialFormData = Object.freeze({
  username: "",
  email: "",
  password: "",
  gender: "",
  preference: "",
});

const Registration = () => {
  const navigate = useNavigate();
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await httpClient.post(`/register`, formData);
      const id = resp.data.id;
      const first_name = resp.data.username.split(' ').slice(0,1).join('');
      navigate('/main', { state : {id: id, first_name: first_name}});
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        alert("Credencias inválidas");
      }
    }
  };

  return (
    <Container>
      <TextBox>
        <PrimaryText>Criar conta</PrimaryText>
        <FormItem>
          <FormItemLabel>nome:</FormItemLabel>
          <FormItemInput
            type="text"
            name="username"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <FormItemLabel>email:</FormItemLabel>
          <FormItemInput
            type="email"
            name="email"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <FormItemLabel>senha:</FormItemLabel>
          <FormItemInput
            type="password"
            name="password"
            onChange={handleChange}
          />
        </FormItem>
        <FormItem>
          <RadioFormLabel>gênero:</RadioFormLabel>
          <RadioItems>
            <RadioItem>
              <RadioItemInput
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <RadioItemLabel>mulher</RadioItemLabel>
            </RadioItem>
            <RadioItem>
              <RadioItemInput
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <RadioItemLabel>homem</RadioItemLabel>
            </RadioItem>
            <RadioItem>
              <RadioItemInput
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
              />
              <RadioItemLabel>outros</RadioItemLabel>
            </RadioItem>
          </RadioItems>
        </FormItem>
        <FormItem>
          <RadioFormLabel>preferência:</RadioFormLabel>
          <RadioItems>
            <RadioItem>
              <RadioItemInput
                type="radio"
                name="preference"
                value="female"
                onChange={handleChange}
              />
              <RadioItemLabel>mulher</RadioItemLabel>
            </RadioItem>
            <RadioItem>
              <RadioItemInput
                type="radio"
                name="preference"
                value="male"
                onChange={handleChange}
              />
              <RadioItemLabel>homem</RadioItemLabel>
            </RadioItem>
            <RadioItem>
              <RadioItemInput
                type="radio"
                name="preference"
                value="all"
                onChange={handleChange}
              />
              <RadioItemLabel>todos</RadioItemLabel>
            </RadioItem>
          </RadioItems>
        </FormItem>
        <Button text='Entrar' bold onClick={handleSubmit} type="submit"/>
      </TextBox>
    </Container>
  );
};

export default Registration;