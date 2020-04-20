import React from "react";
import Wave from "react-wavify";
import { Box, Stack, Heading, ThemeContext } from "grommet";

const variants = {
  protect: {
    height: 20,
    amplitude: 30,
    color: "protect",
  },
  medium: {
    height: 65,
    amplitude: 10,
    color: "medium",
  },
  destruct: {
    height: 100,
    amplitude: 20,
    color: "destruct",
  },
  absence: {
    height: 200,
    amplitude: 20,
    color: "absence",
  },
};

export default function WaveGrade({ grade, variant = "protect" }) {
  const { height, amplitude, color } = variants[variant];
  const { global } = React.useContext(ThemeContext);

  return (
    <Box
      height="small"
      width="small"
      round="full"
      border={{ color, size: "large" }}
      overflow="hidden"
      background="lighter"
      responsive={false}
    >
      <Stack anchor="center" fill>
        <Box fill>
          <Wave
            fill={global.colors.brand}
            options={{
              height,
              amplitude,
              speed: 0.15,
              points: 3,
            }}
          />
          <Box background="brand" fill />
        </Box>

        <Heading color="white">{grade}/20</Heading>
      </Stack>
    </Box>
  );
}
