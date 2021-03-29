import { useEffect, useReducer } from "react";
import { generateUserDocument } from "../firebase/firebaseIndex";

export const arrayDataReducer = (state, item) => {
  if (state.includes(item)) {
    let filteredData = state.filter((x) => x !== item);
    return filteredData;
  } else {
    let newData = [...state, item];
    return newData;
  }
};

export const stringDataReducer = (state, item) => {
  return item;
};

// Get/Set state with reducer function, using session storage
export const useSessionState = (sessionStorageKey, reducer, initialState) => {
  const [data, setData] = useReducer(
    reducer,
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || initialState
  );

  // Store to session storage
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));
  }, [data, sessionStorageKey]);

  return [data, setData];
};

// Get/Set state with reducer function, using firebase
export const useFirebaseState = (user, key) => {
  const [data, setData] = useReducer(arrayDataReducer, user[key] || []);

  useEffect(() => {
    generateUserDocument(user, { [key]: data });
  }, [data, key, user]);

  return [data, setData];
};
