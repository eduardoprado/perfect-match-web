import React, { useState } from "react";
import { DisikeWrapper } from "./styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { COLORS } from "../../../styles/colors";

export const DisikeButton = props => {

  return (
    <DisikeWrapper big={props.big} onClick={props.handleClick}>
        <FavoriteIcon sx={{color: COLORS.WHITE, fontSize: props.big ? "50px" : "35px"}}/>
    </DisikeWrapper>
      
  );
};