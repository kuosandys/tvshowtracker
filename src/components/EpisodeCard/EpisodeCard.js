import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import EpisodeDetails from "../EpisodeDetails/EpisodeDetails";
import ToggleEpisodeWatched from "../ToggleEpisodeWatched/ToggleEpisodeWatched";
import { isUpcomingEpisode } from "./helpers";

function EpisodeCard(props) {
  const { episode } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const isUpcoming = isUpcomingEpisode(episode);

  return (
    <div className="border-t-2 border-gray-200 flex flex-col -my-0.5">
      <div className="flex justify-between items-center px-5 pt-1">
        <div className="flex items-center flex-grow flex-nowrap">
          <ToggleEpisodeWatched episodeId={episode.id} />
          <h3 className="ml-6 mr-2 w-24">Episode {episode.number}</h3>
          <h2 className="font-bold text-lg truncate">{episode.name}</h2>
        </div>
        {isUpcoming && <h3 className="text-sm italic mr-2">Upcoming</h3>}
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
        {isExpanded && (
          <EpisodeDetails {...props} isUpcoming={isUpcoming}></EpisodeDetails>
        )}
      </section>
    </div>
  );
}

export default EpisodeCard;
