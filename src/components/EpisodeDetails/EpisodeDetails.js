import React from "react";
import moment from "moment-timezone"
import { format } from "date-fns"

function EpisodeDetails({ episode, timezone }) {
  return (
    <div className="grid grid-cols-3 my-3">
      <section>
        <img src={episode.image.medium} alt={episode.name} />
        <h4>{`Aired ${format(new Date(...episode.airdate?.split("-")), "LLL do, yyyy")} ${episode.airtime} ${moment(episode.airdate)?.tz(timezone)?.zoneAbbr() || ""}`}</h4>
      </section>

      <p
        dangerouslySetInnerHTML={{ __html: episode.summary }}
        className="col-span-2 pl-5"
      ></p>
    </div>
  );
}

export default EpisodeDetails;
