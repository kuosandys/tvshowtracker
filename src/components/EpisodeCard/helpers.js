import { format } from "date-fns";

export function isUpcomingEpisode(episode) {
  let today = format(Date.now(), "yyyy-LL-dd");
  return episode.airdate >= today;
}
