import { combineReducers } from "redux";
import navReducer from "../../features/navigation/navReducer";
import deputiesReducer from "../../features/deputies/deputiesReducer";
import groupsReducer from "../../features/groups/groupsReducer";
import searchReducer from "../../features/search/searchReducer";

// import { reducer as FormReducer } from 'redux-form';
// import { reducer as ToastrReducer } from 'react-redux-toastr';
// import testReducer from '../../features/testarea/testReducer';
// import eventReducer from '../../features/event/eventReducer';
// import modalReducer from '../../features/modals/modalReducer';
// import authReducer from '../../features/auth/authReducer';
// import asyncReducer from '../../features/async/asyncReducer';
// import { firebaseReducer } from 'react-redux-firebase';
// import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  nav: navReducer,
  // search: searchReducer,
  deputies: deputiesReducer,
  groups: groupsReducer,
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
  // form: FormReducer,
  // test: testReducer,
  // events: eventReducer,
  // modals: modalReducer,
  // auth: authReducer,
  // async: asyncReducer,
  // toastr: ToastrReducer
});

export default rootReducer;
