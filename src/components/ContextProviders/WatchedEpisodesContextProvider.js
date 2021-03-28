import { createContext } from "react";

import { useSessionState, arrayDataReducer } from "../../helpers/helpers";

export const WatchedEpisodesContext = createContext();

export function WatchedEpisodesContextProvider({ children }) {
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
