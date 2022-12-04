import { CircularProgress } from '@mui/material';
import React from 'react';
import { ButtonStyled } from './styles';

export const Button = props => {
  return getButton(ButtonStyled, props);
};

const getButton = (Component, props) => {
  return (
    <Component
      {...props}
      bold={!!props.bold}
      disabled={props.disabled ? props.disabled : false}
      loading={props.loading}
    >
        {props.loading === true ? (
          <CircularProgress size='32px' color="inherit"/>
        ) : (
          props.text
        )}
        {props.children}
    </Component>
  );
};