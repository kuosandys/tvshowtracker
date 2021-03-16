import React from "react";

function TrackShowButton(props) {
  const { showId, trackedShows, handleTrack } = props;
  const trackedClass =
    "bg-blue-400 hover:bg-blue-700 rounded px-3 py-1.5 text-white";

  const untrackedClass =
    "bg-blue-700 hover:bg-blue-400 rounded px-3 py-1.5 text-white";
  return (
    <button
      onClick={() => handleTrack(showId)}
      className={trackedShows.includes(showId) ? trackedClass : untrackedClass}
    >
      {trackedShows.includes(showId) ? "Tracked" : "Track Show"}
    </button>
  );
}

export default TrackShowButton;
