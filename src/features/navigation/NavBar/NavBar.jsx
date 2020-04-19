import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, ResponsiveContext } from "grommet";
import { Menu, Search } from "grommet-icons";

import { toggleMenu, openMenu } from "../navActions";
import { openSearch, closeSearch } from "../../search/searchActions";
import AppLink from "../../../components/Link";

function NavBar(props) {
  const dispatch = useDispatch();
  const { isOpenSearch } = useSelector(({ search }) => search);
  const size = React.useContext(ResponsiveContext);
  const handleSearchIcon = () => {
    dispatch(openMenu());
    dispatch(isOpenSearch ? closeSearch() : openSearch());
  };

  const handleMenuIcon = () => {
    dispatch(toggleMenu());
  };

  return (
    <Box
      as="header"
      direction="row"
      align="center"
      background="white"
      justify="between"
      pad={{ horizontal: "xsmall", vertical: "small" }}
      style={{ zIndex: "1" }}
      {...props}
    >
      <Box direction="row" align="center">
        {/* <Button
          icon={<Menu />}
          label={size !== "small" ? "Menu" : null}
          onClick={handleMenuIcon}
        /> */}
        <AppLink to="/">
          <Heading level={3} margin="none">
            Bloom - Notation App
          </Heading>
        </AppLink>
      </Box>
      {/* <Button
        icon={<Search />}
        plain
        reverse
        label={size !== "small" ? "Rechercher" : null}
        onClick={handleSearchIcon}
        margin={{ right: "medium" }}
      /> */}
    </Box>
  );
}

export default NavBar;
