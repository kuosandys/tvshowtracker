import moment from "moment-timezone";
import { format } from "date-fns";

export const getFormattedAirtime = (airdate, airtime, timezone) => {
  let dateInput = airdate?.split("-").map((str) => Number(str));
  dateInput[1] -= 1;

  return `${format(new Date(...dateInput), "LLL do yyyy")} ${airtime} ${moment(
    airdate
  )
    ?.tz(timezone)
    ?.zoneAbbr()}`;
};
