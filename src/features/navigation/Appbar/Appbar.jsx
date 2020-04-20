import React from "react";
import { Box, Anchor, Button, ResponsiveContext, Image } from "grommet";
import { List, Catalog, Home } from "grommet-icons";
import { useHistory, useLocation } from "react-router-dom";
import AppLink from "../../../components/Link";

const AppbarButtonContent = [
  {
    Icon: Home,
    color: "accent-1",
    label: "Accueil",
    pageUri: "/",
  },
  {
    Icon: List,
    color: "accent-2",
    label: "Les Députés",
    pageUri: "/deputes",
  },
  {
    Icon: Catalog,
    color: "accent-4",
    label: "Méthodologie",
    pageUri: "/methode",
  },
];

const AppbarButton = ({
  icon,
  label,
  onClick,
  isHighlighted,
  isMobile = false,
  ...rest
}) => (
  <Box
    pad={{ horizontal: "medium", vertical: "small" }}
    hoverIndicator="brand"
    onClick={onClick}
    // flex="grow"
    focusIndicator={false}
    background={isHighlighted ? "light-2" : "transparent"}
  >
    <Button
      pad="medium"
      gap="small"
      alignSelf={isMobile ? "end" : "start"}
      plain
      reverse={isMobile}
      focusIndicator={false}
      icon={icon}
      label={label}
      {...rest}
    />
  </Box>
);

export default function Appbar({ ...rest }) {
  const size = React.useContext(ResponsiveContext);
  const history = useHistory();
  const { pathname } = useLocation();
  const isMobile = size === "small";

  const goToPage = (uri) => {
    history.push(uri);
  };

  return (
    <>
      <Box
        width={isMobile ? "full" : "small"}
        height={isMobile ? "xsmall" : "100%"}
      />
      <Box
        width={isMobile ? "full" : "small"}
        height={isMobile ? "xsmall" : "100%"}
        elevation="large"
        direction={isMobile ? "row" : "column"}
        justify="between"
        style={{ position: "fixed", zIndex: 10 }}
        {...rest}
      >
        <AppLink to="/">
          <Box
            pad={{ horizontal: "small", vertical: isMobile ? "small" : "none" }}
            width="small"
            height={isMobile ? "xsmall" : "small"}
          >
            <Image
              fit="contain"
              src={`${process.env.PUBLIC_URL}/assets/logo-bloom.png`}
            />
          </Box>
        </AppLink>
        <Box direction="column" justify={isMobile ? "between" : "end"}>
          {AppbarButtonContent.map(({ Icon, label, color, pageUri }, index) => (
            <AppbarButton
              icon={<Icon color={color} />}
              label={label}
              isHighlighted={pathname === pageUri}
              onClick={() => goToPage(pageUri)}
              key={index}
              isMobile={isMobile}
            />
          ))}
        </Box>
        {size !== "small" && (
          <>
            <Box flex="grow" />
            <Box as="footer" pad="small">
              <Anchor
                href="https://www.bloomassociation.org/"
                color="accent-1"
                label="bloomassociation.org"
                size="small"
              />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
