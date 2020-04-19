import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { useSelector } from "react-redux";

import AppRoutes from "../routes";
import NavBar from "../../features/navigation/NavBar/NavBar";
import Sidebar from "../../features/navigation/Sidebar/Sidebar";

const pagePadding = (size) => {
  switch (size) {
    case "small":
      return "medium";
    case "medium":
      return "large";
    case "large":
      return "large";
    case "xlarge":
      return "xlarge";
    default:
      return "medium";
  }
};

function App() {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box fill background="white" animation="fadeIn">
      {/* <NavBar /> */}
      <Box direction={size === "small" ? "column" : "row"} flex>
        <Sidebar />
        <Box
          flex
          overflow="auto"
          pad={{
            vertical: "medium",
            horizontal: pagePadding(size),
          }}
        >
          <AppRoutes />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
