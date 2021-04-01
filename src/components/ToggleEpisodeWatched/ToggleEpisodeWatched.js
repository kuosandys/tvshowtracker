import React, { useContext } from "react";

import WatchedButton from "../StyleComponents/WatchedButton";
import { WatchedEpisodesContext } from "../ContextProviders/WatchedEpisodesContextProvider";

function ToggleEpisodeWatched({ episodeId }) {
  const { watchedEpisodes, setWatchedEpisodes } = useContext(
    WatchedEpisodesContext
  );

  // For styling - determines whether the episode has been watched or not
  const isWatched = watchedEpisodes.includes(episodeId);

  return (
    <WatchedButton
      isWatched={isWatched}
      onClickHandler={() => setWatchedEpisodes([+episodeId])}
    />
  );
}

export default ToggleEpisodeWatched;
