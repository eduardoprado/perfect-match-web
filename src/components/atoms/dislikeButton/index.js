import React, { useState } from "react";
import { DisikeWrapper } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { COLORS } from "../../../styles/colors";

export const DisikeButton = props => {

  return (
    <DisikeWrapper big={props.big} onClick={props.handleClick}>
        <CloseIcon sx={{color: COLORS.WHITE, fontSize: props.big ? "50px" : "35px"}}/>
    </DisikeWrapper>
      
  );
};