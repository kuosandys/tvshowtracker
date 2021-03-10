import React, { useContext } from "react";

import UserContext from "../User/User";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";

function EpisodesWrapper() {
  const showId = 1;
  const { user } = useContext(UserContext);
  const episodesData = user[showId]["episodes"];

  return (
    <div>
      {Object.entries(episodesData).map(([id, data]) => {
        return (
          <EpisodeCard key={id} episodeId={id} showId={showId} {...data}>
            <WatchedButton
              key={id}
              episodeId={id}
              showId={showId}
              watched={data.watched}
            ></WatchedButton>
          </EpisodeCard>
        );
      })}
    </div>
  );
}

export default EpisodesWrapper;
