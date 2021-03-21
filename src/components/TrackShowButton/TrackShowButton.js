import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function TrackShowButton(props) {
  const { showId, trackedShows, handleTrack } = props;

  return (
    <button
      onClick={() => handleTrack(showId)}
      className={`rounded-full h-8 w-8 border-2 ${
        trackedShows.includes(showId) ? "border-yellow-300" : "border-blue-400"
      }`}
    >
      {trackedShows.includes(showId) ? (
        <FontAwesomeIcon icon={faCheck} className="text-yellow-300" />
      ) : (
        <FontAwesomeIcon icon={faTimes} className="text-blue-400" />
      )}
    </button>
  );
}

export default TrackShowButton;
