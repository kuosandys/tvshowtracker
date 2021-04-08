import React, { useState } from "react";

import { getSeasons } from "../../helpers/dataHelpers";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

function EpisodesWrapper({ episodesData }) {
  const [seasonSelected, setSeasonSelected] = useState(1);

  const seasons = getSeasons(episodesData);

  const seasonSelectedClass = "bg-gray-700 text-white";

  return (
    <div>
      <ul className="flex border-b-2 border-gray-200 overflow-x-scroll justify-start h-16 p-1">
        {seasons.map((season) => {
          return (
            <li
              key={season}
              onClick={() => setSeasonSelected(season)}
              className={`bg-white ${
                season === seasonSelected && seasonSelectedClass
              } flex m-auto py-2 px-3 flex-shrink-0 cursor-pointer rounded-full`}
            >
              Season {season}
            </li>
          );
        })}
      </ul>
      {episodesData
        .filter((episode) => episode.season === seasonSelected)
        .map((episode) => {
          return <EpisodeCard key={episode.id} episode={episode} />;
        })}
    </div>
  );
}

export default EpisodesWrapper;
