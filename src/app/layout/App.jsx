import React from "react";
import { Box, Main, ResponsiveContext } from "grommet";

import AppRoutes from "../routes";
import Appbar from "../../features/navigation/Appbar/Appbar";

function App() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      fill
      flex
      height={{ min: "100vh" }}
      background="background"
      animation="fadeIn"
      direction={size === "small" ? "column" : "row"}
    >
      <Appbar background="lightest" />
      <Main
        flex
        overflow="scroll"
        pad={{
          vertical: "medium",
          horizontal: size,
        }}
      >
        <AppRoutes />
      </Main>
    </Box>
  );
}

export default App;
