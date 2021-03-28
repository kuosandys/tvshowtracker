import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebaseIndex";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // listener for current user with Firebase API
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
