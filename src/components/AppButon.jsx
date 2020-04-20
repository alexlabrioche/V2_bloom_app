import React from "react";
import { Box, Button, ResponsiveContext } from "grommet";

export default function AppButon({
  icon,
  label,
  onClick,
  isHighlighted,
  ...rest
}) {
  const size = React.useContext(ResponsiveContext);
  const isMobile = size === "small";
  return (
    <Box
      pad={{ horizontal: "medium", vertical: "small" }}
      hoverIndicator="brand"
      onClick={onClick}
      focusIndicator={false}
      background={isHighlighted ? "light-2" : "transparent"}
    >
      <Button
        pad="medium"
        gap="small"
        alignSelf={isMobile ? "end" : "start"}
        plain
        reverse={isMobile}
        focusIndicator={false}
        icon={icon}
        label={label}
        {...rest}
      />
    </Box>
  );
}
