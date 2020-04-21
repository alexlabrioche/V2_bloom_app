import React from "react";
import { Box, Button } from "grommet";

export default function AppButon({
  icon,
  label,
  onClick,
  isHighlighted,
  ...rest
}) {
  return (
    <Box
      pad={{ horizontal: "medium", vertical: "small" }}
      hoverIndicator="light-3"
      onClick={onClick}
      focusIndicator={false}
      background={isHighlighted ? "brand" : "transparent"}
      flex
      alignContent="center"
      justify="center"
      {...rest}
    >
      <Button
        gap="small"
        alignSelf="start"
        plain
        focusIndicator={false}
        icon={icon}
        label={label}
      />
    </Box>
  );
}
