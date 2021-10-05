import React, { FunctionComponent } from "react";
import { Typography } from "@mui/material";

const sx = {
  marginTop: 6,
};

const Subtitle: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <Typography component="h3" sx={sx}>
      {children}
    </Typography>
  );
};

export default Subtitle;
