import { createReducer } from "../../app/utils/reducerUtils";
import { SET_GROUPS } from "./groupsConstants";

const initialState = {
  groups: [],
};

const setGroups = (state, payload) => {
  return {
    ...state,
    groups: payload.groups,
  };
};

export default createReducer(initialState, {
  [SET_GROUPS]: setGroups,
});
