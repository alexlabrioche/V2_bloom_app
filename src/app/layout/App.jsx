import React from "react";
import { Box, Grommet, ResponsiveContext } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { useSelector, useDispatch } from "react-redux";

import extend from "../theme/global";
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
      return openMenu ? "large" : "13rem";
    default:
      return "medium";
  }
};

function App() {
  const { isMenuVisible } = useSelector(({ nav }) => nav);
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(closeMenu());
  }, [location]);

  return (
    <Grommet theme={deepMerge(grommet, extend)} themeMode="light" full>
      <Box fill>
        <NavBar />
        <Box direction="row" flex>
          <ResponsiveContext.Consumer>
            {(size) => (
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
            )}
          </ResponsiveContext.Consumer>
          <Menu />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;