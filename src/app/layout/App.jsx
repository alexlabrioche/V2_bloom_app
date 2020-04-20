import React from "react";
import { Box, Main, ResponsiveContext } from "grommet";

import AppRoutes from "../routes";
import Appbar from "../../features/navigation/Appbar/Appbar";

function App() {
  const size = React.useContext(ResponsiveContext);
  const isMobile = size === "small";
  return (
    <Box
      flex
      height={{ min: "100vh" }}
      background="lightest"
      animation="fadeIn"
      direction={isMobile ? "column" : "row"}
    >
      <Appbar background="white" />
      <Main
        flex
        pad={
          isMobile
            ? "none"
            : {
                vertical: "medium",
                horizontal: size,
              }
        }
      >
        <AppRoutes />
      </Main>
    </Box>
  );
}

export default App;
