import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Anchor,
  Collapsible,
  Layer,
  Button,
  Heading,
  Select,
  ResponsiveContext,
} from "grommet";
import { FormClose } from "grommet-icons";

import Link from "../../../components/Link";
import { closeMenu } from "../navActions";

import {
  resetOptions,
  closeSearch,
  setSelectValue,
  openSearch,
} from "../../search/searchActions";

export default function Menu() {
  const { isMenuVisible } = useSelector(({ nav }) => nav);
  const { options, isOpenSearch, value } = useSelector(({ search }) => search);
  const dispatch = useDispatch();
  const [searchOptions, setSearchOptions] = useState(options);

  const handleChange = ({ option }) => {
    dispatch(setSelectValue(option));
  };

  const handleClose = () => {
    dispatch(resetOptions());
    dispatch(closeSearch());
  };

  const handleSearch = (text) => {
    !isOpenSearch && dispatch(openSearch());
    const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    const exp = new RegExp(escapedText, "i");
    setSearchOptions(options.filter((opt) => exp.test(opt)));
  };

  const MenuContent = ({ isMobile = false }) => (
    <Box pad="medium" flex justify="between">
      {isMobile && (
        <Box
          as="header"
          justify="end"
          align="center"
          direction="row"
          margin={{ bottom: "large" }}
        >
          <Button
            icon={<FormClose />}
            label="Fermer"
            plain
            reverse
            onClick={() => dispatch(closeMenu())}
          />
        </Box>
      )}
      <Select
        dropHeight="medium"
        placeholder="Rechercher"
        emptySearchMessage="Désolé nous n'avons pas trouvé"
        searchPlaceholder="Un Député ou un Groupe Européen"
        value={value}
        options={searchOptions}
        open={isOpenSearch}
        onChange={handleChange}
        onClose={handleClose}
        onSearch={handleSearch}
      />
      <Box as="menu" border="top" pad={{ top: "medium" }}>
        <Heading
          margin={{ horizontal: "none", vertical: "small" }}
          responsive={false}
          level={3}
        >
          Naviguer :
        </Heading>
        <Link to="/">
          <Heading margin={{ horizontal: "none", vertical: "small" }} level={5}>
            - Accueil
          </Heading>
        </Link>
        <Link to="/methode">
          <Heading margin={{ horizontal: "none", vertical: "small" }} level={5}>
            - Méthode
          </Heading>
        </Link>
      </Box>
      <Box flex="grow" />
      <Box as="footer" border="top" pad={{ top: "medium" }}>
        <Anchor
          href="https://www.bloomassociation.org/"
          color="accent-1"
          label="Retourner sur le site de Bloom"
        />
      </Box>
    </Box>
  );
  return (
    <ResponsiveContext.Consumer>
      {(size) =>
        !isMenuVisible || size !== "small" ? (
          <Collapsible direction="horizontal" open={isMenuVisible}>
            <Box flex width="medium" background="light-1">
              <MenuContent />
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box fill background="light-1">
              <MenuContent isMobile={true} />
            </Box>
          </Layer>
        )
      }
    </ResponsiveContext.Consumer>
  );
}
