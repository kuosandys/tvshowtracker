import React, { useState, useEffect } from "react";

import EpisodeCard from "../EpisodeCard/EpisodeCard";

function EpisodesWrapper(props) {
  const { showId } = props;
  const [episodes, setEpisodes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  if (isLoaded) {
    return (
      <div>
        {episodes.map((episode) => {
          return <EpisodeCard key={episode.id} episode={episode}></EpisodeCard>;
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
