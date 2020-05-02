import { createStore, applyMiddleware } from "redux";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import firebase from "../config/firebase";

export const configureStore = () => {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, composedEnhancer);

  return store;
};
