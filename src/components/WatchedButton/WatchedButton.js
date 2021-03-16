import React from "react";

function WatchedButton(props) {
  const { episodeId, watched, handleWatch } = props;

  const watchedClass =
    "bg-blue-400 hover:bg-blue-700 rounded px-3 py-1.5 text-white";

  const unwatchedClass =
    "bg-blue-700 hover:bg-blue-400 rounded px-3 py-1.5 text-white";

  return (
    <button
      onClick={() => handleWatch(watched, episodeId)}
      className={watched ? watchedClass : unwatchedClass}
    >
      {watched ? "Watched" : "Add to Watched"}
    </button>
  );
}

export default WatchedButton;
