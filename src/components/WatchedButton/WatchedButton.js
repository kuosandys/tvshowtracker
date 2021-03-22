import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function WatchedButton(props) {
  const { episodeId, watched, handleWatch } = props;

  return (
    <button
      onClick={() => handleWatch(+episodeId)}
      className={`h-6 w-6 border-2 rounded-full border-indigo-800 ${
        watched ? "bg-indigo-200" : ""
      }`}
    >
      {watched ? (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-indigo-800 text-lg pb-1.5"
        />
      ) : (
        ""
      )}
    </button>
  );
}

export default WatchedButton;
