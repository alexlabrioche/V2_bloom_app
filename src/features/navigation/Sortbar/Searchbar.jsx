import React, { useState, useEffect, createRef } from "react";
import { Box, Button, Keyboard, TextInput } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Search = ({
  label = "Rechercher",
  placeholder = "Rechercher...",
  ...rest
}) => {
  const { suggestions, deputies } = useSelector(({ deputies }) => deputies);

  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = createRef();
  const history = useHistory();

  useEffect(() => {
    if (inputRef.current && open) {
      inputRef.current.focus();
    }
  }, [inputRef, open]);

  const goToPage = (name) => {
    const deputy = deputies.find((deputy) => deputy.fullName === name);
    if (deputy) {
      history.push(`/depute/${deputy.slug}`);
    }
  };

  const onChange = (event) => {
    const {
      target: { value: nextValue },
    } = event;
    let nextSuggestions;
    if (nextValue) {
      const regexp = new RegExp(nextValue, "i");
      nextSuggestions = suggestions.filter((c) => regexp.test(c));
    } else {
      nextSuggestions = suggestions;
    }
    if (nextSuggestions.length > 0) {
      setValue(nextValue);
    }
  };

  const onEnter = () => {
    if (value) {
      if (suggestions.length === 1) {
        goToPage(suggestions[0]);
      } else {
        const matches = suggestions.filter(
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

  return (
    <Box
      hoverIndicator
      onClick={() => setOpen(true)}
      justify="center"
      {...rest}
    >
      {!open ? (
        <Button
          alignSelf="start"
          plain
          focusIndicator={false}
          icon={<SearchIcon color="accent-3" />}
          label={label}
        />
      ) : (
        <Keyboard onEsc={() => setOpen(false)} onEnter={onEnter}>
          <TextInput
            ref={inputRef}
            dropHeight="medium"
            placeholder={placeholder}
            value={value}
            plain
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
      )}
    </Box>
  );
};

export default Search;
