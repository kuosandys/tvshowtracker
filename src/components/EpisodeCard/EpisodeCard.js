import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import EpisodeDetails from "../EpisodeDetails/EpisodeDetails";

function EpisodeCard(props) {
  const { episode, children } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-2 border-gray-600 flex flex-col -my-0.5 text-white">
      <div className="flex justify-between px-5 pt-1">
        <div className="flex items-baseline flex-grow">
          {children}
          <h3 className="mx-2">Episode {episode.number}</h3>
          <h2 className="font-bold text-lg mx-2">{episode.name}</h2>
        </div>
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="h-10 w-10"
        >
          {isExpanded ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      <section className="px-5 pb-1">
        {isExpanded && <EpisodeDetails {...props}></EpisodeDetails>}
      </section>
    </div>
  );
}

export default EpisodeCard;
