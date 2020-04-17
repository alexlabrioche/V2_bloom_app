import { SET_DEPUTY, SET_GROUP } from "./deputiesConstants";

export const setDeputy = (slug) => {
  return {
    type: SET_DEPUTY,
    payload: { slug },
  };
};

export const setGroup = (slug) => {
  return {
    type: SET_GROUP,
    payload: { slug },
  };
};
