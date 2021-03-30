import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function WatchedButton({ isWatched, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className={`h-6 w-6 border-2 rounded-full border-indigo-800 ${
        isWatched && "bg-indigo-200"
      }`}
    >
      {isWatched && (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-indigo-800 text-lg pb-1.5"
        />
      )}
    </button>
  );
}

export default WatchedButton;
