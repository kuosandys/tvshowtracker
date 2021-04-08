import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function WatchedButton({ isWatched, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className={`h-6 w-6 border-2 rounded-full ${
        isWatched ? "bg-indigo-200 border-indigo-200" : "border-indigo-500"
      }`}
    >
      {isWatched && (
        <FontAwesomeIcon
          icon={faCheck}
          className="text-indigo-500 text-lg pb-1.5"
        />
      )}
    </button>
  );
}

export default WatchedButton;
