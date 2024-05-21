import { AdventusDate } from "../types";
import { getEasterDate } from "./getEasterDate";
import { getSeasonFromDate } from "./getSeasonFromDate";

export const fillInDays = (dates: Partial<AdventusDate>[]): AdventusDate[] => {
  const easterDate = getEasterDate(dates[dates.length - 1].date.getFullYear());
  return dates.reduce((acc, date, idx) => {
    if (idx === 0) {
      acc.push(date as AdventusDate);
    }

    const extendedDate = {
      ...date,
      season: getSeasonFromDate(date.date, dates[0].date, easterDate),
    };

    // TODO: get weeks of season from season
    const datesInSeason = acc.filter(
      ({ season }) => season === extendedDate.season,
    );

    extendedDate.weekOfSeason = datesInSeason.length + 1;

    return acc;
  }, []);
};
