import {
  SET_DEPUTY,
  SET_FRENCH_DEPUTIES,
  SET_EXPANDED_CARD,
  SORT_BY_GRADE,
  SORT_ALPHABETICALLY,
  SET_ALL_DEPUTIES,
  FILTER_DEPUTIES_BY_GRADE,
} from "./deputiesConstants";
import firebase from "../../app/config/firebase";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "../async/asyncActions";
import { toastr } from "react-redux-toastr";

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
    const deputies = res.data();
    dispatch({ type: SET_FRENCH_DEPUTIES, payload: { deputies } });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log("🔥🔥 error", error);
    toastr.error(
      "Problème de connection à la base de donnée",
      "Veuillez recharger la page"
    );
    dispatch(asyncActionError());
  }
};

export const getAllDeputies = () => async (dispatch) => {
  const firestore = firebase.firestore();
  const deputiesRef = firestore.collection("deputies");
  try {
    dispatch(asyncActionStart());
    let res = await deputiesRef.doc("all").get();
    const all = res.data();
    dispatch({ type: SET_ALL_DEPUTIES, payload: { all } });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log("🔥🔥 error", error);
    toastr.error(
      "Problème de connection à la base de donnée",
      "Veuillez recharger la page"
    );
    dispatch(asyncActionError());
  }
};

export const editTwitterDeputies = (newTwitterObject) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  try {
    dispatch(asyncActionStart());
    const firestore = getFirestore();
    const deputiesRef = firestore.collection("deputies").doc("french");
    let batch = firestore.batch();
    const { french } = getState().deputies;
    Object.keys(newTwitterObject).forEach((id) => {
      french[id].twitter = newTwitterObject[id];
    });
    batch.update(deputiesRef, french);
    await batch.commit();
    toastr.success("👍", "les députés ont été mis à jour");
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log("🔥🔥 error", error);
    toastr.error(
      "les députés n'ont pas pu être édité",
      "Veuillez recharger la page"
    );
    dispatch(asyncActionError());
  }
};
