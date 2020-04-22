import {
  SET_DEPUTY,
  SET_EXPANDED_CARD,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  FILTER_DEPUTIES_BY_GRADE,
} from "./deputiesConstants";

export const setDeputy = (slug) => {
  return {
    type: SET_DEPUTY,
    payload: { slug },
  };
};

export const sortByGrade = (order) => {
  return {
    type: SORT_BY_GRADE,
    payload: { order },
  };
};

export const sortAlphabetically = () => {
  return {
    type: SORT_ALPHABETICALLY,
  };
};

export const filterDeputiesByGrade = (values) => {
  return {
    type: FILTER_DEPUTIES_BY_GRADE,
    payload: { values },
  };
};

export const setExpandedCard = (value) => {
  return {
    type: SET_EXPANDED_CARD,
    payload: { value },
  };
};
