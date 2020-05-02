import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "grommet";

import Appbar from "../../features/navigation/Appbar/Appbar";
import Sortbar from "../../features/navigation/Sortbar/Sortbar";
import AppRoutes from "../routes";
import useResponsive from "../hooks/useResponsive";

const desktopLayout = {
  columns: ["auto", "flex"],
  rows: ["auto", "flex"],
  areas: [
    {
      name: "appbar",
      start: [0, 0],
      end: [0, 1],
    },
    {
      name: "sortbar",
      start: [1, 0],
      end: [1, 1],
    },
    {
      name: "main",
      start: [1, 1],
      end: [1, 1],
    },
  ],
};

const mobileLayout = {
  columns: ["auto"],
  rows: ["auto", "auto", "flex"],
  areas: [
    {
      name: "appbar",
      start: [0, 0],
      end: [0, 1],
    },
    {
      name: "sortbar",
      start: [0, 1],
      end: [0, 1],
    },
    {
      name: "main",
      start: [0, 2],
      end: [0, 2],
    },
  ],
};

function App() {
  const { pathname } = useLocation();
  const { isMobile } = useResponsive();
  return (
    <Box fill background="lightest">
      <Grid
        fill
        rows={isMobile ? mobileLayout.rows : desktopLayout.rows}
        columns={isMobile ? mobileLayout.columns : desktopLayout.columns}
        areas={isMobile ? mobileLayout.areas : desktopLayout.areas}
      >
        <Box gridArea="appbar">{pathname !== "/admin" ? <Appbar /> : null}</Box>
        <Box gridArea="sortbar">
          {pathname === "/deputes" ? <Sortbar /> : null}
        </Box>
        <Box gridArea="main">
          <AppRoutes />
        </Box>
      </Grid>
    </Box>
  );
}

export default App;
