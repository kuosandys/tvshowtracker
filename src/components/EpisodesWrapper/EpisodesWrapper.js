import React, { useState } from "react";

import { getSeasons } from "../../helpers/dataHelpers";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";

function EpisodesWrapper({ episodesData }) {
  const [seasonSelected, setSeasonSelected] = useState(1);

  const seasons = getSeasons(episodesData);

  const seasonSelectedClass = "font-bold bg-indigo-200";

  return (
    <div>
      <ul className="flex overflow-x-scroll justify-start border-b-2 border-gray-200">
        {seasons.map((season) => {
          return (
            <li
              key={season}
              onClick={() => setSeasonSelected(season)}
              className={`bg-white ${
                season === seasonSelected && seasonSelectedClass
              } px-3 py-3 flex-shrink-0 cursor-pointer`}
            >
              Season {season}
            </li>
          );
        })}
      </ul>
      {episodesData
        .filter((episode) => episode.season === seasonSelected)
        .map((episode) => {
          return (
            <EpisodeCard key={episode.id} episode={episode}>
              <WatchedButton episodeId={episode.id}></WatchedButton>
            </EpisodeCard>
          );
        })}
    </div>
  );
}

export default EpisodesWrapper;
