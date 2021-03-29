import React, { createContext, useEffect, useState } from "react";
import { auth, generateUserDocument } from "../../firebase/firebaseIndex";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // listener for current user with Firebase API
  useEffect(() => {
    const getCurrentUser = async () => {
      auth.onAuthStateChanged(async (userAuth) => {
        const user = await generateUserDocument(userAuth);
        setUser(user);
      });
    };
    getCurrentUser();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
