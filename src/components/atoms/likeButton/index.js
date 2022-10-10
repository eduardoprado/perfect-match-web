import React from "react";
import { LikeWrapper } from "./styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { COLORS } from "../../../styles/colors";

export const LikeButton = props => {

  return (
    <LikeWrapper big={props.big} onClick={props.handleClick} disabled={props.disabled}>
        <FavoriteIcon sx={{color: COLORS.WHITE, fontSize: props.big ? "50px" : "35px"}}/>
    </LikeWrapper>
      
  );
};