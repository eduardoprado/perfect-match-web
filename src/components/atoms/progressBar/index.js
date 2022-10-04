import React from "react";
import { InnerBar, OuterBar, Text } from "./styles";

export const ProgressBar = (props) => {
  const { completed, total, like, white, nobackground } = props;
  
  return (
    <OuterBar nobackground={nobackground}>
      <InnerBar completed={completed} like={!!like}/>
      <Text white={!!white}>
            {
              !!like ?
              `${total} Curtidas`
              : `${total} Descurtidas`
            }
      </Text>
    </OuterBar>
  );
};