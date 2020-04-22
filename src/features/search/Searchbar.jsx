import React, { useState, useEffect, createRef } from "react";
import { Box, Button, Keyboard, TextInput } from "grommet";
import { Search as SearchIcon } from "grommet-icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSearchbar } from "../navigation/navActions";

const Search = ({
  label = "Rechercher",
  placeholder = "Rechercher...",
  ...rest
}) => {
  const { suggestions: allSuggestions, deputies } = useSelector(
    ({ deputies }) => deputies
  );
  const { showSearchbar: open } = useSelector(({ nav }) => nav);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(allSuggestions);
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
      nextSuggestions = allSuggestions.filter((c) => regexp.test(c));
    } else {
      nextSuggestions = allSuggestions;
    }
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

  return (
    <Box
      pad={open ? "none" : "small"}
      hoverIndicator
      onClick={() => dispatch(setSearchbar(true))}
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
        <Keyboard onEsc={() => dispatch(setSearchbar(false))} onEnter={onEnter}>
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
              dispatch(setSearchbar(true));
            }}
            onSuggestionsClose={() => {
              dispatch(setSearchbar(false));
            }}
          />
        </Keyboard>
      )}
    </Box>
  );
};

export default Search;
