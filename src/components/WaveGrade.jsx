import React from "react";
import Wave from "react-wavify";
import { Box, Stack, Text, ThemeContext } from "grommet";
import getColorFromGrade from "../app/utils/getColorFromGrade";
import UIGrade from "./UIGrade";

const variants = {
  protect: {
    color: "protect",
  },
  medium: {
    color: "medium",
  },
  destruct: {
    color: "destruct",
  },
  absence: {
    color: "absence",
  },
};

export default function WaveGrade({ grade }) {
  const { color } = variants[getColorFromGrade(grade)];
  const { global } = React.useContext(ThemeContext);

  return (
    <Box
      height="small"
      width="auto"
      round="xxsmall"
      overflow="hidden"
      responsive={false}
    >
      <Stack anchor="center" fill>
        <Box fill>
          <Wave
            fill={global.colors.brand}
            options={{
              height: 20,
              amplitude: 40,
              speed: 0.15,
              points: 3,
            }}
          />
          <Box background="brand" fill />
        </Box>
        <Text textAlign="center" size="large" color="white">
          Call2Action
          <br />
          Twitter
        </Text>
      </Stack>
    </Box>
  );
}
