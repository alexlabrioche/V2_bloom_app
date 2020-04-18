import { createReducer } from "../../app/utils/reducerUtils";
import deputies from "../../app/data/deputies.json";
import groups from "../../app/data/groups.json";
import { SET_DEPUTY, SET_GROUP } from "./localDataConstants";

const initialState = {
  deputies: deputies,
  groups: groups,
  deputyDetails: {},
  groupDetails: {},
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

export default createReducer(initialState, {
  [SET_DEPUTY]: setDeputy,
  [SET_GROUP]: setGroup,
});
