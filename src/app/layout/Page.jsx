import React from "react";
import { Main, Box } from "grommet";
import BackButton from "../../components/BackButton";

export default function Page({ goBack, children, ...rest }) {
  return (
    <Box
      flex
      alignContent="start"
      direction="column"
      background="white"
      margin="medium"
      round="xxsmall"
      elevation="xsmall"
      pad="small"
      overflow="scroll"
      {...rest}
    >
      {children}
      {goBack && (
        <Box border={{ color: "light-4", side: "top" }} pad={{ top: "small" }}>
          <Box alignSelf="start">
            <BackButton />
          </Box>
        </Box>
      )}
    </Box>
  );
}
