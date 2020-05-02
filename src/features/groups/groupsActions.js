import { SET_GROUPS } from "./groupsConstants";
import firebase from "../../app/config/firebase";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/asyncActions";

export const getGroups = () => async (dispatch) => {
  const firestore = firebase.firestore();
  const deputiesRef = firestore.collection("deputies");
  try {
    dispatch(asyncActionStart());
    let res = await deputiesRef.doc("groups").get();
    const data = res.data();
    const groups = Object.keys(data).map((i) => data[i]);
    dispatch({ type: SET_GROUPS, payload: { groups } });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log("🔥🔥 error", error);
    dispatch(asyncActionError());
  }
};
