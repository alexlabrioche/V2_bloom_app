import React from "react";
import { Box, Image } from "grommet";
import { UserExpert, Catalog, Home, Group } from "grommet-icons";
import { useHistory, useLocation } from "react-router-dom";

import AppButton from "../../../components/AppButon";
import useResponsive from "../../../app/hooks/useResponsive";

const AppbarButtonContent = [
  {
    Icon: Home,
    label: "Accueil",
    pageUri: "/",
  },
  {
    Icon: Group,
    label: "Les Groupes",
    pageUri: "/groupes",
  },
  {
    Icon: UserExpert,
    label: "Les Députés",
    pageUri: "/deputes",
  },
  {
    Icon: Catalog,
    label: "Méthodologie",
    pageUri: "/methode",
  },
];

export default function Appbar() {
  const history = useHistory();
  const { pathname } = useLocation();
  const { isMobile } = useResponsive();
  const goToPage = (uri) => {
    history.push(uri);
  };

  return (
    <Box
      as="nav"
      flex
      width={isMobile ? "full" : "small"}
      elevation={isMobile ? "medium" : null}
      height={isMobile ? "xxsmall" : "100%"}
      direction={isMobile ? "row" : "column"}
      justify={isMobile ? "between" : "start"}
      background={isMobile ? "white" : null}
      style={{ zIndex: 10 }}
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
        {AppbarButtonContent.map(({ Icon, label, pageUri }, index) => (
          <AppButton
            icon={<Icon color={pathname === pageUri ? "white" : "brand"} />}
            label={isMobile ? false : label}
            isHighlighted={pathname === pageUri}
            onClick={() => goToPage(pageUri)}
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
}
