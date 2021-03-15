import React from "react";

function WatchedButton(props) {
  const { episodeId, watched, handleWatch } = props;

  return (
    <button onClick={() => handleWatch(watched, episodeId)}>
      {watched ? "watched" : "unwatched"}
    </button>
  );
}

export default WatchedButton;
