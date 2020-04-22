import React from "react";
import { Box, Image } from "grommet";
import { UserExpert, Catalog, Home, Group } from "grommet-icons";
import { useHistory, useLocation } from "react-router-dom";

import AppButton from "../../../components/AppButon";
import Footer from "../Footer/Footer";

const AppbarButtonContent = [
  {
    Icon: Home,
    color: "accent-1",
    label: "Accueil",
    pageUri: "/",
  },
  {
    Icon: Group,
    color: "accent-1",
    label: "Les Groupes",
    pageUri: "/groupes",
  },
  {
    Icon: UserExpert,
    color: "accent-1",
    label: "Les Députés",
    pageUri: "/deputes",
  },
  {
    Icon: Catalog,
    color: "accent-1",
    label: "Méthodologie",
    pageUri: "/methode",
  },
];

export default function Appbar({ isMobile = false, ...rest }) {
  const history = useHistory();
  const { pathname } = useLocation();

  const goToPage = (uri) => {
    history.push(uri);
  };

  return (
    <Box
      width={isMobile ? "full" : "small"}
      height={isMobile ? "xxsmall" : "100%"}
    >
      <Box
        as="nav"
        flex
        width={isMobile ? "full" : "small"}
        height={isMobile ? "xxsmall" : "100%"}
        // elevation={isMobile ? "medium" : "large"}
        direction={isMobile ? "row" : "column"}
        justify="between"
        style={{ position: "fixed", zIndex: 10 }}
        {...rest}
      >
        <Box
          pad={{
            horizontal: "medium",
            vertical: isMobile ? "small" : "none",
          }}
          width={isMobile ? "xsmall" : "small"}
          height={isMobile ? "xxsmall" : "small"}
          onClick={() => history.push("/")}
          hoverIndicator
          focusIndicator={false}
        >
          <Image
            fit="contain"
            src={`${process.env.PUBLIC_URL}/assets/logo-bloom.png`}
          />
        </Box>
        <Box
          direction={isMobile ? "row" : "column"}
          justify={isMobile ? "between" : "end"}
        >
          {AppbarButtonContent.map(({ Icon, label, color, pageUri }, index) => (
            <AppButton
              icon={<Icon color={pathname === pageUri ? "white" : color} />}
              label={isMobile ? false : label}
              isHighlighted={pathname === pageUri}
              onClick={() => goToPage(pageUri)}
              key={index}
            />
          ))}
        </Box>
        {!isMobile && (
          <>
            <Box flex="grow" />
            <Footer pad="small" />
          </>
        )}
      </Box>
    </Box>
  );
}
