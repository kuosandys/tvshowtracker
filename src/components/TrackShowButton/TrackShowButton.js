import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { TrackedShowsContext } from "../ContextProviders/TrackedShowsContextProvider";

function TrackShowButton(props) {
  const { showId } = props;
  const { trackedShows, setTrackedShows } = useContext(TrackedShowsContext);

  return (
    <button
      onClick={() => setTrackedShows([+showId])}
      className={`rounded-full h-8 w-8 border-2 ${
        trackedShows.includes(showId)
          ? "border-indigo-200 bg-indigo-200"
          : "border-indigo-200 hover:bg-indigo-200"
      }`}
    >
      {trackedShows.includes(showId) ? (
        <FontAwesomeIcon icon={faCheck} className="text-indigo-500" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="text-white" />
      )}
    </button>
  );
}

export default TrackShowButton;
