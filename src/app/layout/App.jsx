import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Box, Main, Grid, ResponsiveContext } from "grommet";

import Appbar from "../../features/navigation/Appbar/Appbar";
import Footer from "../../features/navigation/Footer/Footer";
import Sortbar from "../../features/navigation/Sort/Sort";
import AppRoutes from "../routes";

const desktopLayout = {
  rows: ["auto", "flex"],
  columns: ["auto", "flex"],
  areas: [
    {
      name: "appbar",
      start: [0, 0],
      end: [0, 1],
    },
    {
      name: "sortbar",
      start: [1, 0],
      end: [1, 0],
    },
    {
      name: "main",
      start: [1, 1],
      end: [1, 1],
    },
  ],
};

const mobileLayout = {
  rows: ["auto", "auto", "flex", "auto"],
  columns: ["auto"],
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
    {
      name: "footer",
      start: [0, 3],
      end: [0, 3],
    },
  ],
};

function App() {
  const size = useContext(ResponsiveContext);
  const { pathname } = useLocation();
  const isMobile = size === "small";
  return (
    <Grid
      fill
      rows={isMobile ? mobileLayout.rows : desktopLayout.rows}
      columns={isMobile ? mobileLayout.columns : desktopLayout.columns}
      areas={isMobile ? mobileLayout.areas : desktopLayout.areas}
    >
      <Box gridArea="appbar">
        <Appbar isMobile={isMobile} background="white" />
      </Box>

      <Box gridArea="sortbar">
        {pathname === "/deputes" ? <Sortbar background="white" /> : null}
      </Box>

      <Box gridArea="main">
        <Main flex="grow" background="lightest">
          <AppRoutes />
        </Main>
      </Box>

      {isMobile && (
        <Box gridArea="footer">
          <Footer
            background="white"
            pad="small"
            justify="end"
            elevation="medium"
          />
        </Box>
      )}
    </Grid>
  );
}

export default App;
