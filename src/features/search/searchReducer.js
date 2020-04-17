import { createReducer } from "../../app/utils/reducerUtils";
import deputies from "../../app/data/deputies.json";
import {
  RESET_OPTIONS,
  OPEN_SEARCH,
  CLOSE_SEARCH,
  SET_SEARCH_VALUE,
} from "./searchConstants";

const allOptions = deputies
  .reduce((acc, { fullName, group }) => {
    if (!acc.includes(group)) {
      acc.push(group);
    }
    acc.push(fullName);
    return acc;
  }, [])
  .sort();

const initialState = {
  options: allOptions,
  isOpenSearch: false,
  value: "",
};

const openSearch = (state) => {
  return {
    ...state,
    isOpenSearch: true,
  };
};

const closeSearch = (state) => {
  return {
    ...state,
    isOpenSearch: false,
  };
};

const setValue = (state, payload) => {
  return {
    ...state,
    value: payload.value,
  };
};

const resetOptions = (state) => {
  return {
    ...state,
    options: allOptions,
  };
};

export default createReducer(initialState, {
  [RESET_OPTIONS]: resetOptions,
  [OPEN_SEARCH]: openSearch,
  [CLOSE_SEARCH]: closeSearch,
  [SET_SEARCH_VALUE]: setValue,
});
