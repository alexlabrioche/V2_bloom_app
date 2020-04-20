import React from "react";
import { Box } from "grommet";

export default function Page({ children, ...rest }) {
  return (
    <Box
      background="white"
      pad="medium"
      round="xsmall"
      elevation="small"
      {...rest}
    >
      {children}
    </Box>
  );
}
