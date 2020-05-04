import { createReducer } from "../../app/utils/reducerUtils";
import getColorFromGrade from "../../app/utils/getColorFromGrade";

import {
  SET_DEPUTY,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  SET_EXPANDED_CARD,
  SET_FRENCH_DEPUTIES,
  SET_ALL_DEPUTIES,
} from "./deputiesConstants";

function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

const mockGrades = (deputiesArr) => {
  return deputiesArr.map((d) => {
    const grade = Math.floor(Math.random() * (20 - 6) + 6);
    return {
      ...d,
      grade,
      gradeColor: getColorFromGrade(grade),
    };
  });
};

const toggleOrder = (order) => (order === "asc" ? "desc" : "asc");

const initialState = {
  french: {},
  all: [],
  alphaOrder: "asc",
  gradeOrder: "asc",
  expandedCard: false,
  suggestions: [],
  deputyDetails: {},
  frenchCount: 0,
  allCount: 0,
};

const setFrenchDeputies = (state, payload) => {
  const suggestions = Object.keys(payload.deputies)
    .map((i) => payload.deputies[i])
    .sort(compareValues("lastName", "asc"))
    .map((deputy) => deputy.fullName);
  return {
    ...state,
    suggestions,
    french: payload.deputies,
    frenchCount: suggestions.length,
  };
};

const setAllDeputies = (state, payload) => {
  const allCount = Object.keys(payload.all).map((i) => payload.all[i]).length;
  return {
    ...state,
    all: payload.all,
    allCount,
  };
};

const setDeputy = (state, payload) => {
  const deputy = state.deputies.find(({ slug }) => slug === payload.slug);
  if (!deputy) {
    return state;
  }
  return {
    ...state,
    deputyDetails: deputy,
  };
};

const sortByGrade = (state) => {
  const gradeOrder = toggleOrder(state.gradeOrder);
  return {
    ...state,
    gradeOrder,
    deputies: state.deputies.sort(compareValues("grade", gradeOrder)),
  };
};

const sortAlphabetically = (state) => {
  const alphaOrder = toggleOrder(state.alphaOrder);
  return {
    ...state,
    alphaOrder,
    deputies: state.deputies.sort(compareValues("lastName", alphaOrder)),
  };
};

const setExpandedCard = (state, payload) => {
  return {
    ...state,
    expandedCard: payload.value,
  };
};

export default createReducer(initialState, {
  [SET_FRENCH_DEPUTIES]: setFrenchDeputies,
  [SET_ALL_DEPUTIES]: setAllDeputies,
  [SET_DEPUTY]: setDeputy,
  [SORT_BY_GRADE]: sortByGrade,
  [SORT_ALPHABETICALLY]: sortAlphabetically,
  [SET_EXPANDED_CARD]: setExpandedCard,
});
