export const login = (creds) => {
  return async (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
    } catch (error) {
      alert(error.message);
    }
  };
};
export const logout = () => {
  return async (dispatch, _, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.logout();
    } catch (error) {
      alert(error.message);
    }
  };
};
