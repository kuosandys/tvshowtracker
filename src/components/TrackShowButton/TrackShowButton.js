import React from "react";

function TrackShowButton(props) {
  const { showId, trackedShows, handleTrack } = props;
  return (
    <button onClick={() => handleTrack(showId)}>
      {trackedShows.includes(showId) ? "Tracked" : "Track Show"}
    </button>
  );
}

export default TrackShowButton;
