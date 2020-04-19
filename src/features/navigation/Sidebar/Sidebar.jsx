import React from "react";
import { Box, Anchor, Button, ResponsiveContext, Heading } from "grommet";
import { List, Catalog, Home } from "grommet-icons";
import { useHistory, useLocation } from "react-router-dom";

import SearchComponent from "../Search/Search";

const SidebarButton = ({ icon, label, onClick, isHighlighted, ...rest }) => (
  <Box
    pad={{ horizontal: "medium", vertical: "small" }}
    hoverIndicator="tertiary"
    onClick={onClick}
    background={isHighlighted ? "light-3" : "transparent"}
  >
    <Button
      pad="medium"
      gap="small"
      alignSelf="start"
      plain
      focusIndicator={false}
      icon={icon}
      label={label}
      {...rest}
    />
  </Box>
);

const SidebarbuttonData = [
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

export default function Sidebar() {
  const [showSearchBar, setShowSearchBar] = React.useState(false);
  const targetRef = React.useRef();
  const size = React.useContext(ResponsiveContext);
  const history = useHistory();
  const { pathname } = useLocation();
  const isMobile = size === "small";

  const goToPage = (uri) => {
    history.push(uri);
  };

  return (
    <Box
      width={isMobile ? "full" : "small"}
      pad={{ top: "medium" }}
      direction="column"
      justify="between"
    >
      <Box fill={isMobile && "horizontal"}>
        <Heading
          level={1}
          textAlign="center"
          margin={{ vertical: isMobile ? "small" : "large" }}
          size="small"
          color="dark-4"
        >
          BloomLogo
        </Heading>
      </Box>
      <Box
        direction={isMobile ? "row" : "column"}
        justify={isMobile ? "between" : "start"}
        ref={targetRef}
      >
        {SidebarbuttonData.map(({ Icon, label, color, pageUri }, index) => (
          <SidebarButton
            icon={<Icon color={color} />}
            label={!isMobile && label}
            isHighlighted={pathname === pageUri}
            onClick={() => goToPage(pageUri)}
            key={index}
          />
        ))}
        <SearchComponent open={showSearchBar} setOpen={setShowSearchBar} />

        {/* {showSearchBar ? (
          <SearchComponent open={showSearchBar} setOpen={setShowSearchBar} />
        ) : (
          <SidebarButton
            icon={<Search color="accent-3" />}
            label={!isMobile && "Rechercher"}
            onClick={() => setShowSearchBar(true)}
          />
        )} */}
      </Box>
      <Box flex="grow" />
      {size !== "small" && (
        <Box as="footer" pad="small">
          <Anchor
            href="https://www.bloomassociation.org/"
            color="accent-1"
            label="bloomassociation.org"
            size="small"
          />
        </Box>
      )}
    </Box>
  );
}
