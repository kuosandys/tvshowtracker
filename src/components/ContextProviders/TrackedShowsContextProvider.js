import { createContext, useContext } from "react";

import {
  useSessionState,
  arrayDataReducer,
  useFirebaseState,
} from "../../helpers/helpers";
import { UserContext } from "./UserContextProvider";

export const TrackedShowsContext = createContext();

function TrackedShowsSessionContext({ children }) {
  const [trackedShows, setTrackedShows] = useSessionState(
    "trackedShows",
    arrayDataReducer,
    []
  );

  return (
    <TrackedShowsContext.Provider value={{ trackedShows, setTrackedShows }}>
      {children}
    </TrackedShowsContext.Provider>
  );
}

function TrackedShowsFirebaseContext({ children }) {
  const user = useContext(UserContext);
  const [trackedShows, setTrackedShows] = useFirebaseState(
    user,
    "trackedShows"
  );

  return (
    <TrackedShowsContext.Provider value={{ trackedShows, setTrackedShows }}>
      {children}
    </TrackedShowsContext.Provider>
  );
}

export function TrackedShowsContextProvider({ children }) {
  const user = useContext(UserContext);

  return user ? (
    <TrackedShowsFirebaseContext>{children}</TrackedShowsFirebaseContext>
  ) : (
    <TrackedShowsSessionContext>{children}</TrackedShowsSessionContext>
  );
}
