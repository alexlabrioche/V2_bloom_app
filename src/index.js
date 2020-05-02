import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./app/layout/App";
import * as serviceWorker from "./serviceWorker";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/utils/ScrollToTop";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import extend from "./app/theme/global";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./app/config/firebase";

const rrfConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const store = configureStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Grommet theme={deepMerge(grommet, extend)} full>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </Grommet>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
