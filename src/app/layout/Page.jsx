import React from "react";
import { Main, Box } from "grommet";
import Footer from "../../features/navigation/Footer/Footer";
import BackButton from "../../components/BackButton";
import { Helmet } from "react-helmet";
import useResponsive from "../hooks/useResponsive";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

export default function Page({
  paper = false,
  transparant = true,
  title = "Accueil",
  goBack,
  children,
  ...rest
}) {
  const { isMobile, size } = useResponsive();
  const { loading } = useSelector(({ async }) => async);
  return (
    <Main
      flex="grow"
      alignContent="start"
      direction="column"
      pad="small"
      overflow="scroll"
      background="lightest"
      {...rest}
    >
      <Box
        flex="grow"
        background={paper ? "white" : "transparent"}
        margin="small"
        round={paper ? "xxsmall" : "none"}
        elevation={paper ? "small" : "none"}
        pad={
          paper && {
            horizontal: isMobile ? "medium" : size,
            vertical: "medium",
          }
        }
      >
        <Helmet>
          <title>{`${title} | Bloom`}</title>
        </Helmet>
        {loading ? <Loader /> : children}
        {goBack && (
          <Box
            border={{ color: "light-4", side: "top" }}
            pad={{ top: "small" }}
          >
            <Box alignSelf="start">
              <BackButton />
            </Box>
          </Box>
        )}
      </Box>
      <Footer />
    </Main>
  );
}
