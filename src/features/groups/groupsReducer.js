import { createReducer } from "../../app/utils/reducerUtils";
import groups from "../../app/data/groups.json";

const initialState = {
  groups,
  // alphaOrder: "asc",
  // gradeOrder: "asc",
  // suggestions,
};

export default createReducer(initialState, {
  // [SET_DEPUTY]: setDeputy,
  // [SORT_BY_GRADE]: sortByGrade,
  // [SORT_ALPHABETICALLY]: sortAlphabetically,
  // [FILTER_DEPUTIES_BY_GRADE]: filterDeputies,
});
