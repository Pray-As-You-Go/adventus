import { AdventusDate } from "../types";
import { getEasterDate } from "./getEasterDate";
import { getSeasonFromDate } from "./getSeasonFromDate";
import { FIXED_FEASTS } from "../data/fixedFeasts";
import { getMoveableFeasts } from "../data/moveableFeasts";

const format = new Intl.DateTimeFormat("en-UK", {
  month: "short",
  day: "numeric",
});

export const fillInDays = (dates: Partial<AdventusDate>[]): AdventusDate[] => {
  const easterDate = getEasterDate(dates[dates.length - 1].date.getFullYear());
  return dates.reduce((acc, date, idx) => {
    if (idx === 0) {
      acc.push(date as AdventusDate);
      return acc;
    }

    const extendedDate = {
      ...date,
      season: getSeasonFromDate(date.date, dates[0].date, easterDate),
    };

    const datesInSeason = acc.filter(
      ({ season }) => season === extendedDate.season,
    );

    extendedDate.dayOfSeason = datesInSeason.length + 1;
    extendedDate.weekOfSeason =
      datesInSeason.filter(({ date }) => date.getDay() === 0).length + 1;

    const todaysFixedFeasts =
      FIXED_FEASTS[format.format(extendedDate.date)] || [];
    const moveablefeasts = getMoveableFeasts(dates[0].date, easterDate);
    const todaysMoveableFeasts =
      moveablefeasts[format.format(extendedDate.date)] || [];
    extendedDate.feasts = [...todaysFixedFeasts, ...todaysMoveableFeasts];

    acc.push(extendedDate);

    return acc;
  }, []);
};
