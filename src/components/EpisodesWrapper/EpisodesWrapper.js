import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";
import { useLocalEpisodesState } from "../../helpers/helpers";

// Reducer for updating watched episodes array
const episodesReducer = (state, action) => {
  if (action.type === "add") {
    return [...state, action.episode];
  } else if (action.type === "remove") {
    let newState = state.filter((item) => item !== action.episode);
    return [...newState];
  }
};

function EpisodesWrapper() {
  const { showId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [watchedEpisodes, setWatchedEpisodes] = useLocalEpisodesState(
    episodesReducer,
    +showId
  );

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        let response = await fetch(
          `http://api.tvmaze.com/shows/${showId}/episodes?specials=1`
        );
        let dataObject = await response.json();
        let dataArray = Object.values(dataObject);
        setEpisodes(dataArray);
        setIsLoaded(true);
      } catch (error) {
        alert(error);
      }
    };
    fetchShowData();
  }, [showId]);

  const handleWatch = (watched, episodeId) => {
    setWatchedEpisodes({
      type: watched ? "remove" : "add",
      show: +showId,
      episode: episodeId,
    });
  };

  if (isLoaded) {
    return (
      <div>
        {episodes.map((episode) => {
          return (
            <EpisodeCard key={episode.id} episode={episode}>
              <WatchedButton
                episodeId={episode.id}
                watched={watchedEpisodes.includes(episode.id) ? true : false}
                handleWatch={handleWatch}
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
