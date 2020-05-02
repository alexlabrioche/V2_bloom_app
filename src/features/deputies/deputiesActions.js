import {
  SET_DEPUTY,
  SET_DEPUTIES,
  SET_EXPANDED_CARD,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  FILTER_DEPUTIES_BY_GRADE,
} from "./deputiesConstants";
import firebase from "../../app/config/firebase";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/asyncActions";

export const setDeputy = (slug) => {
  return {
    type: SET_DEPUTY,
    payload: { slug },
  };
};

export const sortByGrade = (order) => {
  return {
    type: SORT_BY_GRADE,
    payload: { order },
  };
};

export const sortAlphabetically = () => {
  return {
    type: SORT_ALPHABETICALLY,
  };
};

export const filterDeputiesByGrade = (values) => {
  return {
    type: FILTER_DEPUTIES_BY_GRADE,
    payload: { values },
  };
};

export const setExpandedCard = (value) => {
  return {
    type: SET_EXPANDED_CARD,
    payload: { value },
  };
};

export const getFrenchDeputies = () => async (dispatch) => {
  const firestore = firebase.firestore();
  const deputiesRef = firestore.collection("deputies");
  try {
    dispatch(asyncActionStart());
    let res = await deputiesRef.doc("french").get();
    const data = res.data();
    const deputies = Object.keys(data).map((i) => data[i]);
    dispatch({ type: SET_DEPUTIES, payload: { deputies } });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log("🔥🔥 error", error);
    dispatch(asyncActionError());
  }
};
