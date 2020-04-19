import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Keyboard, TextInput } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = ({ open, setOpen }) => {
  const { suggestions: allSuggestions, groups, deputies } = useSelector(
    ({ localData }) => localData
  );

  const [value, setValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState(allSuggestions);
  const inputRef = React.createRef();
  const history = useHistory();

  React.useEffect(() => {
    if (inputRef.current && open) {
      inputRef.current.focus();
    }
  }, [open]);

  const goToPage = (name) => {
    const deputy = deputies.find((deputy) => deputy.fullName === name);
    if (deputy) {
      history.push(`/depute/${deputy.slug}`);
    }
    const group = groups.find((group) => group.name === name);
    if (group) {
      history.push(`/groupe/${group.slug}`);
    }
  };

  const onChange = (event) => {
    const {
      target: { value: nextValue },
    } = event;
    let nextSuggestions;
    if (nextValue) {
      const regexp = new RegExp(nextValue, "i");
      nextSuggestions = allSuggestions.filter((c) => regexp.test(c));
    } else {
      nextSuggestions = allSuggestions;
    }
    // don't use newer value if nothing matches it
    if (nextSuggestions.length > 0) {
      setValue(nextValue);
      setSuggestions(nextSuggestions);
    }
  };

  const onEnter = () => {
    if (value) {
      if (suggestions.length === 1) {
        goToPage(suggestions[0]);
      } else {
        const matches = allSuggestions.filter(
          (c) => c.toLowerCase() === value.toLowerCase()
        );
        if (matches.length === 1) {
          goToPage(matches[0]);
        }
      }
    }
  };

  const onSelect = (event) => {
    goToPage(event.suggestion);
  };

  if (open) {
    return (
      <Keyboard onEsc={() => setOpen(false)} onEnter={onEnter}>
        <TextInput
          ref={inputRef}
          dropHeight="medium"
          placeholder="Un député ou un groupe"
          value={value}
          plain
          size="small"
          dropProps={{ elevation: "large" }}
          suggestions={suggestions}
          onChange={onChange}
          onSelect={onSelect}
          onSuggestionsOpen={() => {
            setOpen(true);
          }}
          onSuggestionsClose={() => {
            setOpen(false);
          }}
        />
      </Keyboard>
    );
  }

  return (
    <Box
      pad={{ horizontal: "medium", vertical: "small" }}
      hoverIndicator="tertiary"
      onClick={() => setOpen(true)}
    >
      <Button
        pad="medium"
        gap="small"
        alignSelf="start"
        plain
        focusIndicator={false}
        icon={<SearchIcon color="accent-3" />}
        label={"Rechercher"}
      />
    </Box>
  );
};

Search.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Search;
