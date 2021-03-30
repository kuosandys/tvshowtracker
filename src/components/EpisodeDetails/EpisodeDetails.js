import React from "react";

import { getFormattedAirtime } from "./helpers";

function EpisodeDetails({ episode, isUpcoming }) {
  return (
    <section className="grid grid-cols-3 my-3">
      <img src={episode.image?.medium} alt={episode.name} className="m-auto" />
      <div className="col-span-2 pl-5">
        <h4 className="italic">{`${isUpcoming ? "Airs" : "Aired"} ${
          getFormattedAirtime(
            episode.airdate,
            episode.airtime,
            episode.timezone
          ) || ""
        }`}</h4>
        <p
          dangerouslySetInnerHTML={{ __html: episode.summary }}
          className="mt-1"
        ></p>
      </div>
    </section>
  );
}

export default EpisodeDetails;
