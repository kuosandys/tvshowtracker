import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function WatchedButton(props) {
  const { episodeId, watched, handleWatch } = props;

  return (
    <button onClick={() => handleWatch(episodeId)} className="h-10 w-10">
      {watched ? (
        <FontAwesomeIcon icon={faCheck} className="text-yellow-300" />
      ) : (
        <FontAwesomeIcon icon={faTimes} className="text-blue-300" />
      )}
    </button>
  );
}

export default WatchedButton;
