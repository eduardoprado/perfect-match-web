import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { COLORS } from "../../../styles/colors";
import { LogoutButtonStyled } from "./styles";
import httpClient from "../../../httpClient";
import { useNavigate } from "react-router-dom";

export const LogoutButton = props => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await httpClient.post(`/logout`);
      navigate('/');
    } catch (error) {
      alert("Ocorreu um erro no logout");
    }
  }

  return (
    <LogoutButtonStyled big={props.big} onClick={logout} disabled={props.disabled}>
        <LogoutIcon sx={{color: COLORS.WHITE, fontSize: "25px"}}/>
    </LogoutButtonStyled>
      
  );
};