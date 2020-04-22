import React from "react";
import { Box, Heading, Text } from "grommet";

import getColorFromGrade from "../app/utils/getColorFromGrade";

export default function UIGrade({
  small = false,
  withLabel = false,
  isWhite = false,
  grade,
  ...rest
}) {
  const gradeColor = getColorFromGrade(grade);
  return (
    <Box
      alignSelf={withLabel ? "start" : "end"}
      align="end"
      margin="xsmall"
      {...rest}
    >
      <Box direction="row" align="baseline">
        <Heading
          size={small ? "medium" : "large"}
          level={2}
          margin="none"
          color={isWhite ? "white" : gradeColor}
          textAlign="center"
        >
          {grade}
          {withLabel && "*"}
        </Heading>
        <Text
          size={small ? "large" : "xlarge"}
          color={isWhite ? "white" : gradeColor}
          responsive={false}
        >
          /20
        </Text>
      </Box>
      {withLabel && (
        <Text
          textAlign="end"
          size="small"
          color="dark-3"
          margin={{ left: "small" }}
        >
          * Cette note correspond à la moyenne pondérée
          <br />
          des députés Français présents dans ce groupe
        </Text>
      )}
    </Box>
  );
}
