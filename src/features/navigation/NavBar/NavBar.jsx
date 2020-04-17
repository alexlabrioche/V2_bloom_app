import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Heading, Select } from "grommet";
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
      <Box direction="row" align="center">
        <Button icon={<Menu />} onClick={handleMenuIcon} />
        <Heading level={4} margin="none">
          Bloom - Notation App
        </Heading>
      </Box>
      <Button icon={<Search />} onClick={handleSearchIcon} />
    </Box>
  );
}

export default NavBar;
