import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, ResponsiveContext } from "grommet";
import { Menu, Search } from "grommet-icons";

import { toggleMenu, openMenu, closeMenu } from "../navActions";
import { openSearch, closeSearch } from "../../search/searchActions";

function NavBar(props) {
  const dispatch = useDispatch();
  const { isOpenSearch } = useSelector(({ search }) => search);

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
      background="transparent"
      elevation="small"
      justify="between"
      pad={{ left: "medium", right: "small", vertical: "xsmall" }}
      style={{ zIndex: "1" }}
      {...props}
    >
      <Heading level={3} margin="none" color="brand">
        Bloom - Notation App
      </Heading>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box direction="row" align="center">
            <Button
              icon={<Search />}
              plain
              reverse
              label={size !== "small" ? "Rechercher" : null}
              onClick={handleSearchIcon}
              margin={{ right: "medium" }}
            />
            <Button
              icon={<Menu />}
              label={size !== "small" ? "Menu" : null}
              reverse
              onClick={handleMenuIcon}
            />
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Box>
  );
}

export default NavBar;
