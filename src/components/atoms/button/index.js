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
        {props.loading ? (
          <CircularProgress size='16px' />
        ) : (
          props.text
        )}
        {props.children}
    </Component>
  );
};