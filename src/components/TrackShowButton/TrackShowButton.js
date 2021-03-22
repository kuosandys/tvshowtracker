import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

function TrackShowButton(props) {
  const { showId, trackedShows, handleTrack } = props;

  return (
    <button
      onClick={() => handleTrack(+showId)}
      className={`rounded-full h-8 w-8 border-2 ${
        trackedShows.includes(showId)
          ? "border-indigo-300 bg-indigo-300"
          : "border-indigo-300 hover:bg-indigo-300"
      }`}
    >
      {trackedShows.includes(showId) ? (
        <FontAwesomeIcon icon={faCheck} className="text-gray-800" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="text-white" />
      )}
    </button>
  );
}

export default TrackShowButton;
