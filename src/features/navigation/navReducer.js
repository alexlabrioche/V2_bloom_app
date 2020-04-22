import { createReducer } from "../../app/utils/reducerUtils";
import {
  MENU_OPEN,
  MENU_CLOSE,
  TOGGLE_MENU,
  SET_SEARCHBAR,
} from "./navConstants";

const initialState = {
  isMenuVisible: false,
  showSearchbar: false,
};

const toggleMenu = (state) => {
  return { ...state, isMenuVisible: !state.isMenuVisible };
};

const openMenu = (state) => {
  return { ...state, isMenuVisible: true };
};

const closeMenu = (state) => {
  return { ...state, isMenuVisible: false };
};

const setSearchbar = (state, payload) => {
  return {
    ...state,
    showSearchbar: payload.value,
  };
};

export default createReducer(initialState, {
  [MENU_OPEN]: openMenu,
  [MENU_CLOSE]: closeMenu,
  [TOGGLE_MENU]: toggleMenu,
  [SET_SEARCHBAR]: setSearchbar,
});
