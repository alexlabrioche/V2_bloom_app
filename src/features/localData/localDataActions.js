import {
  SET_DEPUTY,
  SET_GROUP,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  FILTER_DEPUTIES_BY_GRADE,
} from "./localDataConstants";

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
