import React from "react";
import moment from "moment-timezone";
import { format } from "date-fns";

function EpisodeDetails({ episode, timezone }) {
  return (
    <section className="grid grid-cols-3 my-3">
      <img src={episode.image?.medium} alt={episode.name} />
      <div className="col-span-2 pl-5">
        <h4 className="italic">{`Aired ${format(
          new Date(...episode.airdate?.split("-")),
          "LLL do yyyy"
        )} ${episode.airtime} ${
          moment(episode.airdate)?.tz(timezone)?.zoneAbbr() || ""
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
