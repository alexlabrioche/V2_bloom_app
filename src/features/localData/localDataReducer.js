import { createReducer } from "../../app/utils/reducerUtils";
import deputies from "../../app/data/deputies.json";
import groups from "../../app/data/groups.json";
import {
  SET_DEPUTY,
  SET_GROUP,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
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
function generateGradesArray({ min, max }) {
  let ret = [max];
  let tempVal = max;
  do {
    tempVal -= 2;
    ret.unshift(tempVal);
  } while (tempVal > min);
  return ret;
}

const initialState = {
  deputies: mockGrades(deputies),
  groups: groups,
  alphaOrder: "asc",
  suggestions: deputies
    .sort(compareValues("lastName", "asc"))
    .map((deputy) => deputy.fullName),
  deputyDetails: {},
  groupDetails: {},
  gradesValues: generateGradesArray({
    min: 6,
    max: 20,
  }),
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

export default createReducer(initialState, {
  [SET_DEPUTY]: setDeputy,
  [SET_GROUP]: setGroup,
  [SORT_BY_GRADE]: sortByGrade,
  [SORT_ALPHABETICALLY]: sortAlphabetically,
});
