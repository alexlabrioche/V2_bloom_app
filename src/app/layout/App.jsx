import React from "react";
import { Box, ResponsiveContext } from "grommet";
import { useSelector, useDispatch } from "react-redux";

import AppRoutes from "../routes";
import NavBar from "../../features/navigation/NavBar/NavBar";
import Menu from "../../features/navigation/Menu/Menu";
import { useLocation } from "react-router-dom";
import { closeMenu } from "../../features/navigation/navActions";

const pagePadding = (size, openMenu) => {
  switch (size) {
    case "small":
      return "medium";
    case "medium":
      return "large";
    case "large":
      return "large";
    case "xlarge":
      return "large";
    default:
      return "medium";
  }
};

function App() {
  const { isMenuVisible } = useSelector(({ nav }) => nav);
  const location = useLocation();
  const dispatch = useDispatch();
  const size = React.useContext(ResponsiveContext);

  React.useEffect(() => {
    size === "small" && dispatch(closeMenu());
  }, [location]);

  return (
    <Box fill>
      <NavBar />
      <Box direction="row" flex>
        <Menu />
        <Box
          flex
          overflow="auto"
          pad={{
            vertical: "medium",
            horizontal: pagePadding(size, isMenuVisible),
          }}
        >
          <AppRoutes />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
