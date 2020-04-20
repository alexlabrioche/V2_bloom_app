import React from "react";
import Wave from "react-wavify";
import { Box, Stack, Heading } from "grommet";

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
};

export default function WaveGrade({ grade, variant = "protect" }) {
  const { height, amplitude, color } = variants[variant];
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
            fill="#4A6881"
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
