import React, { useState, useEffect } from "react";

import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";

function EpisodesWrapper({
  showId,
  timezone,
  watchedEpisodes,
  setWatchedEpisodes,
}) {
  const [episodesData, setEpisodesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [seasons, setSeasons] = useState([]);
  const [seasonSelected, setSeasonSelected] = useState(1);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      try {
        // Fetch episodes data from TVmaze API
        let response = await fetch(
          `https://api.tvmaze.com/shows/${showId}/episodes?specials=1`
        );
        let dataObject = await response.json();

        // Flatten dataObject into array; set Episodes data
        let dataArray = Object.values(dataObject);
        setEpisodesData(dataArray);

        // Get all distinct seasons as an array; set Seasons
        let seasonsArray = [
          ...new Set(dataArray.map((episode) => episode.season)),
        ];
        setSeasons(seasonsArray);

        setIsLoaded(true);
      } catch (error) {
        alert(error);
      }
    };
    fetchEpisodesData();
  }, [showId]);

  const seasonSelectedClass = "font-bold bg-indigo-200";

  return (
    <div className="md:max-w-screen-md lg:max-w-screen-lg mx-auto bg-white">
      {isLoaded && (
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
                  timezone={timezone}
                >
                  <WatchedButton
                    episodeId={episode.id}
                    watched={
                      watchedEpisodes.includes(episode.id) ? true : false
                    }
                    handleWatch={setWatchedEpisodes}
                  ></WatchedButton>
                </EpisodeCard>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default EpisodesWrapper;
