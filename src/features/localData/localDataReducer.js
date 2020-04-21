import { createReducer } from "../../app/utils/reducerUtils";
import deputies from "../../app/data/deputies.json";
import groups from "../../app/data/groups.json";
import {
  SET_DEPUTY,
  SET_GROUP,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  FILTER_DEPUTIES_BY_GRADE,
} from "./localDataConstants";

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
  return deputiesArr.map((d) => ({
    ...d,
    grade: Math.floor(Math.random() * (20 - 6) + 6),
  }));
};

function getGradesAndValues({ minGrade, maxGrade }) {
  const isOdd = (n) => n % 2 !== 0;
  let grade = isOdd(minGrade) ? minGrade - 1 : minGrade;
  let value = 0;
  let ret = [{ value, grade }];
  do {
    value += 1;
    grade += 2;
    ret.push({ value, grade });
  } while (grade < 20);
  return ret;
}

const deputiesWithGrades = mockGrades(deputies);

const suggestions = deputies
  .sort(compareValues("lastName", "asc"))
  .map((deputy) => deputy.fullName);

const minMaxGrade = (deputies) => ({
  minGrade: Math.min(...deputies.map((d) => d.grade)),
  maxGrade: Math.max(...deputies.map((d) => d.grade)),
});

const initScale = getGradesAndValues(minMaxGrade(deputiesWithGrades));

const initValues = [
  initScale[0].value,
  initScale[initScale.length - 1].value + 1,
];

const initialState = {
  deputies: deputiesWithGrades,
  groups: groups,
  alphaOrder: "asc",
  suggestions,
  deputyDetails: {},
  groupDetails: {},
  rangeValues: {
    scale: initScale,
    values: initValues,
    minGrade: initScale[0].grade,
    maxGrade: initScale[initScale.length - 1].grade,
  },
};

const setDeputy = (state, payload) => {
  const deputy = state.deputies.find(({ slug }) => slug === payload.slug);
  if (!deputy) {
    return state;
  }
  const group = state.groups.find(({ id }) => id === deputy.groupId);
  return {
    ...state,
    deputyDetails: { ...deputy, groupName: group.name, groupSlug: group.slug },
  };
};

const setGroup = (state, payload) => {
  const group = state.groups.find(({ slug }) => slug === payload.slug);
  if (!group) {
    return state;
  }
  const deputies = state.deputies.filter(({ groupId }) => groupId === group.id);
  return {
    ...state,
    groupDetails: { ...group, deputies },
  };
};

const sortByGrade = (state, payload) => {
  return {
    ...state,
    deputies: state.deputies.sort(compareValues("grade", payload.order)),
  };
};

const sortAlphabetically = (state) => {
  const order = state.alphaOrder === "asc" ? "desc" : "asc";
  return {
    ...state,
    alphaOrder: order,
    deputies: state.deputies.sort(compareValues("lastName", order)),
  };
};

const getGradeFromValue = (scale, value) => {
  return scale.find((s) => s.value === value).grade;
};

const filterDeputies = (state, payload) => {
  const min = payload.values[0];
  const max = payload.values[1] - 1;
  return {
    ...state,
    rangeValues: {
      ...state.rangeValues,
      values: payload.values,
      minGrade: getGradeFromValue(state.rangeValues.scale, min),
      maxGrade: getGradeFromValue(state.rangeValues.scale, max),
    },
  };
};

export default createReducer(initialState, {
  [SET_DEPUTY]: setDeputy,
  [SET_GROUP]: setGroup,
  [SORT_BY_GRADE]: sortByGrade,
  [SORT_ALPHABETICALLY]: sortAlphabetically,
  [FILTER_DEPUTIES_BY_GRADE]: filterDeputies,
});
