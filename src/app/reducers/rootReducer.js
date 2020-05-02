import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import deputiesReducer from "../../features/deputies/deputiesReducer";
import groupsReducer from "../../features/groups/groupsReducer";
import asyncReducer from "../../features/async/asyncReducer";

const rootReducer = combineReducers({
  deputies: deputiesReducer,
  groups: groupsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  async: asyncReducer,
});

export default rootReducer;
