import { createReducer } from "../../app/utils/reducerUtils";
import deputies from "../../app/data/deputies.json";
import { SET_DEPUTY, SET_GROUP } from "./deputiesConstants";

const initialState = {
  all: deputies,
  deputy: {},
  deputyLoaded: false,
  group: [],
  groupLoaded: false,
};

const setCurrentDeputy = (state, payload) => {
  const deputy = state.all.filter(({ slug }) => slug === payload.slug);
  return {
    ...state,
    deputy: deputy.length === 1 ? deputy[0] : {},
    deputyLoaded: true,
  };
};

const setCurrentGroup = (state, payload) => {
  const group = state.all.filter(({ groupSlug }) => groupSlug === payload.slug);
  return {
    ...state,
    group,
    groupLoaded: true,
  };
};

export default createReducer(initialState, {
  [SET_DEPUTY]: setCurrentDeputy,
  [SET_GROUP]: setCurrentGroup,
});
