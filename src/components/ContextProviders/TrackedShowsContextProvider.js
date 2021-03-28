import { createContext } from "react";

import { useSessionState, arrayDataReducer } from "../../helpers/helpers";

export const TrackedShowsContext = createContext();

export function TrackedShowsContextProvider({ children }) {
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
