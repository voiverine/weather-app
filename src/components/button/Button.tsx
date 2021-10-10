import React, { FunctionComponent } from "react";
import { Button as ButtonComponent, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  //space for customization options
}

const Button: FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;

  return (
    <ButtonComponent size="large" {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
