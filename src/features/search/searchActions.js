import {
  RESET_OPTIONS,
  OPEN_SEARCH,
  CLOSE_SEARCH,
  SET_SEARCH_VALUE,
} from "./searchConstants";

export const resetOptions = () => {
  return {
    type: RESET_OPTIONS,
  };
};

export const openSearch = () => {
  return {
    type: OPEN_SEARCH,
  };
};

export const closeSearch = () => {
  return {
    type: CLOSE_SEARCH,
  };
};

export const setSelectValue = (value) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: { value },
  };
};
