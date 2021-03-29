import { createContext, useContext } from "react";

import {
  useSessionState,
  arrayDataReducer,
  useFirebaseState,
} from "../../helpers/helpers";
import { UserContext } from "./UserContextProvider";

export const WatchedEpisodesContext = createContext();

function WatchedEpisodesSessionContext({ children }) {
  const [watchedEpisodes, setWatchedEpisodes] = useSessionState(
    "watchedEpisodes",
    arrayDataReducer,
    []
  );

  return (
    <WatchedEpisodesContext.Provider
      value={{ watchedEpisodes, setWatchedEpisodes }}
    >
      {children}
    </WatchedEpisodesContext.Provider>
  );
}

function WatchedEpisodesFirebaseContext({ children }) {
  const user = useContext(UserContext);
  const [watchedEpisodes, setWatchedEpisodes] = useFirebaseState(
    user,
    "watchedEpisodes"
  );

  return (
    <WatchedEpisodesContext.Provider
      value={{ watchedEpisodes, setWatchedEpisodes }}
    >
      {children}
    </WatchedEpisodesContext.Provider>
  );
}

export function WatchedEpisodesContextProvider({ children }) {
  const user = useContext(UserContext);

  return user ? (
    <WatchedEpisodesFirebaseContext>{children}</WatchedEpisodesFirebaseContext>
  ) : (
    <WatchedEpisodesSessionContext>{children}</WatchedEpisodesSessionContext>
  );
}
