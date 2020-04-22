import {
  MENU_OPEN,
  MENU_CLOSE,
  TOGGLE_MENU,
  SET_SEARCHBAR,
} from "./navConstants";

export const openMenu = () => {
  return {
    type: MENU_OPEN,
  };
};

export const closeMenu = () => {
  return {
    type: MENU_CLOSE,
  };
};

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  };
};

export const setSearchbar = (value) => {
  return {
    type: SET_SEARCHBAR,
    payload: { value },
  };
};
