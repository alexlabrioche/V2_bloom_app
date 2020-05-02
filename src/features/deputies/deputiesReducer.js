import { createReducer } from "../../app/utils/reducerUtils";
import getColorFromGrade from "../../app/utils/getColorFromGrade";
import slugify from "../../app/utils/slugify";

import {
  SET_DEPUTY,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  SET_EXPANDED_CARD,
  SET_DEPUTIES,
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
  deputies: [],
  alphaOrder: "asc",
  gradeOrder: "asc",
  expandedCard: false,
  suggestions: [],
  deputyDetails: {},
};

const setDeputies = (state, payload) => {
  const deputies = payload.deputies.map((d) => ({
    ...d,
    slug: slugify(d.fullName),
  }));
  const suggestions = deputies
    .sort(compareValues("lastName", "asc"))
    .map((deputy) => deputy.fullName);
  return {
    ...state,
    suggestions,
    deputies,
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

// const getGradeFromValue = (scale, value) => {
//   return scale.find((s) => s.value === value).grade;
// };

// const filterDeputies = (state, payload) => {
//   const min = payload.values[0];
//   const max = payload.values[1] - 1;
//   return {
//     ...state,
//     rangeValues: {
//       ...state.rangeValues,
//       values: payload.values,
//       minGrade: getGradeFromValue(state.rangeValues.scale, min),
//       maxGrade: getGradeFromValue(state.rangeValues.scale, max),
//     },
//   };
// };

export default createReducer(initialState, {
  [SET_DEPUTIES]: setDeputies,
  [SET_DEPUTY]: setDeputy,
  [SORT_BY_GRADE]: sortByGrade,
  [SORT_ALPHABETICALLY]: sortAlphabetically,
  [SET_EXPANDED_CARD]: setExpandedCard,
  // [FILTER_DEPUTIES_BY_GRADE]: filterDeputies,
});
