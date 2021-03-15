import React, { useState } from "react";

import EpisodeDetails from "../EpisodeDetails/EpisodeDetails";

function EpisodeCard(props) {
  const { episode, children } = props;
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand((expand) => !expand);
  }

  return (
    <div>
      <h3>{`Season ${episode.season} Episode ${episode.number}`}</h3>
      <h2>{episode.name}</h2>
      <button onClick={(e) => handleClick(e)}>Expand</button>
      {children}
      {expand && <EpisodeDetails {...props}></EpisodeDetails>}
    </div>
  );
}

export default EpisodeCard;
