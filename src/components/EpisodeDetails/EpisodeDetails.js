import React from "react";

function EpisodeDetails(props) {
  const { imgUrl, airdate, airtime, summary } = props;
  return (
    <div>
      <img src={imgUrl} alt="Promotional Poster" />
      <h4>{`Aired ${airdate} ${airtime}`}</h4>
      <p>{summary}</p>
    </div>
  );
}

export default EpisodeDetails;
