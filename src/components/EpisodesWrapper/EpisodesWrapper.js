import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import EpisodeCard from "../EpisodeCard/EpisodeCard";
import WatchedButton from "../WatchedButton/WatchedButton";

// dummy data - set local storage when adding tv shows eventually
const sampleEpisodeIds = [
  { show: 1, episodes: [1, 2] },
  { show: 2, episodes: [28, 29] },
];
localStorage.setItem("watchedEpisodesData", JSON.stringify(sampleEpisodeIds));

// Reducer for updating watched episodes array
const episodesReducer = (state, action) => {
  if (action.type === "add") {
    return [...state, action.episode];
  } else if (action.type === "remove") {
    let newState = state.filter((item) => item !== action.episode);
    return [...newState];
  }
};

// Get/Set state with reducer function, using local storage
const useLocalStorageReducer = (reducer, showId) => {
  const [watchedEpisodes, setWatchedEpisodes] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("watchedEpisodesData")).find(
      (item) => item.show === showId
    )["episodes"]
  );

  // Store to local storage
  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("watchedEpisodesData"));
    let selectedShow = localData.find((item) => item.show === showId);
    selectedShow["episodes"] = watchedEpisodes;
    let newData = localData.filter((item) => item.show !== showId);
    newData.push(selectedShow);
    localStorage.setItem("watchedEpisodesData", JSON.stringify(newData));
  }, [showId, watchedEpisodes]);

  return [watchedEpisodes, setWatchedEpisodes];
};

function EpisodesWrapper() {
  const { showId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [watchedEpisodes, setWatchedEpisodes] = useLocalStorageReducer(
    episodesReducer,
    +showId
  );

  useEffect(() => {
    const fetchShowData = async () => {
      let response = await fetch(
        `http://api.tvmaze.com/shows/${showId}/episodes?specials=1`
      );
      let dataObject = await response.json();
      let dataArray = Object.values(dataObject);
      setEpisodes(dataArray);
      setIsLoaded(true);
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
