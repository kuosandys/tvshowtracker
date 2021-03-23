import React, { useState, useEffect } from "react";

import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";

function EpisodesWrapper({
  episodesData,
  watchedEpisodes,
  setWatchedEpisodes,
}) {
  const [seasons, setSeasons] = useState([]);
  const [seasonSelected, setSeasonSelected] = useState(1);

  const seasonSelectedClass = "font-bold bg-indigo-200";

  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto bg-white">
      <div>
        <ul className="flex overflow-x-scroll justify-start border-b-2 border-gray-200">
          {seasons.map((season) => {
            return (
              <li
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
              <EpisodeCard
                key={episode.id}
                episode={episode}
                timezone={episode.timezone}
              >
                <WatchedButton
                  episodeId={episode.id}
                  watched={watchedEpisodes.includes(episode.id) ? true : false}
                  handleWatch={setWatchedEpisodes}
                ></WatchedButton>
              </EpisodeCard>
            );
          })}
      </div>
    </div>
  );
}

export default EpisodesWrapper;
