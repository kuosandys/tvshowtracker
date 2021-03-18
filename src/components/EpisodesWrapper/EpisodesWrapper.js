import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";
import { useLocalState } from "../../helpers/helpers";

function EpisodesWrapper() {
  const { showId } = useParams();
  const [episodesData, setEpisodesData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [watchedEpisodes, setWatchedEpisodes] = useLocalState("watchedEpisodes");

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        let response = await fetch(
          `http://api.tvmaze.com/shows/${showId}/episodes?specials=1`
        );
        let dataObject = await response.json();
        let dataArray = Object.values(dataObject);
        setEpisodesData(dataArray);
        setIsLoaded(true);
      } catch (error) {
        alert(error);
      }
    };
    fetchShowData();
  }, [showId]);

  if (isLoaded) {
    return (
      <div className="max-w-screen-md mx-auto">
        {episodesData.map((episode) => {
          return (
            <EpisodeCard key={episode.id} episode={episode}>
              <WatchedButton
                episodeId={episode.id}
                watched={watchedEpisodes.includes(episode.id) ? true : false}
                handleWatch={setWatchedEpisodes}
              ></WatchedButton>
            </EpisodeCard>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  }
}

export default EpisodesWrapper;
