import React, { useEffect, useReducer } from "react";

const reducer = (state, item) => {
  item = +item
  if (state.includes(item)) {
    let filteredData = state.filter(x => x !== item);
    return filteredData
  } else {
    let newData = [...state, item]
    return newData
  }
};

// Get/Set state with reducer function, using local storage
export const useLocalState = (localStorageKey) => {
  const [data, setData] = useReducer(reducer, JSON.parse(localStorage.getItem(localStorageKey)) || [])

  // Store to local storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(data))
  }, [data, localStorageKey]);

  return [data, setData];
};