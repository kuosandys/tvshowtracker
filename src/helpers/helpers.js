import { useEffect, useReducer } from "react";

const reducer = (state, item) => {
  item = +item;
  if (state.includes(item)) {
    let filteredData = state.filter((x) => x !== item);
    return filteredData;
  } else {
    let newData = [...state, item];
    return newData;
  }
};

// Get/Set state with reducer function, using session storage
export const useSessionState = (sessionStorageKey) => {
  const [data, setData] = useReducer(
    reducer,
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || []
  );

  // Store to session storage
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));
  }, [data, sessionStorageKey]);

  return [data, setData];
};
