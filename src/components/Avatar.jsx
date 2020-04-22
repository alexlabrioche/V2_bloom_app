import React from "react";
import { Box, Image } from "grommet";

export default function Avatar({ picture, size = "xxsmall", ...rest }) {
  const defaultPic = `${process.env.PUBLIC_URL}/assets/default-profile.png`;
  return (
    <Box height={size} width={size} round="full" overflow="hidden" {...rest}>
      <Image fit="cover" fill src={picture || defaultPic} />
    </Box>
  );
}
