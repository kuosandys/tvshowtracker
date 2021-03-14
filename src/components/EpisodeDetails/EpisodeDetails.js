import React from "react";

function EpisodeDetails(props) {
  const { episode } = props;
  return (
    <div>
      <img src={episode.image.medium} alt="Promotional Poster" />
      <h4>{`Aired ${episode.airdate} ${episode.airtime}`}</h4>
      <p>{episode.summary}</p>
    </div>
  );
}

export default EpisodeDetails;
