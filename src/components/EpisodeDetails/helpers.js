import moment from "moment-timezone";
import { format } from "date-fns";

export const getFormattedAirtime = (airdate, airtime, timezone) => {
  return `${format(
    new Date(...airdate?.split("-")),
    "LLL do yyyy"
  )} ${airtime} ${moment(airdate)?.tz(timezone)?.zoneAbbr()}`;
};
