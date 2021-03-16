import React, { useState } from "react";

import EpisodeDetails from "../EpisodeDetails/EpisodeDetails";

function EpisodeCard(props) {
  const { episode, children } = props;
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand((expand) => !expand);
  }

  return (
    <div className="border-2 border-gray-400 flex flex-col my-3">
      <div className="flex justify-between px-5 pt-3">
        <section>
          <h3>{`Season ${episode.season} Episode ${episode.number}`}</h3>
          <h2 className="font-bold text-lg">{episode.name}</h2>
        </section>
        <section className="w-60 flex justify-between items-center">
          <button
            onClick={(e) => handleClick(e)}
            className="bg-gray-400 hover:bg-gray-500 rounded px-3 py-1.5 text-white"
          >
            Expand
          </button>
          {children}
        </section>
      </div>
      <section className="px-5 pb-3">
        {expand && <EpisodeDetails {...props}></EpisodeDetails>}
      </section>
    </div>
  );
}

export default EpisodeCard;
