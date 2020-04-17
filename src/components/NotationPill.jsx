import React from "react";
import { Box, Heading } from "grommet";

export default function NotationPill({ grade, ...otherProps }) {
  return (
    <Box
      height="3rem"
      width="3rem"
      background="protect"
      pad="large"
      round="full"
      flex
      responsive={false}
      align="center"
      justify="center"
      {...otherProps}
    >
      <Heading style={{ transform: "rotate(-10deg)" }} level={3} color="white">
        {grade}/20
      </Heading>
    </Box>
  );
}
