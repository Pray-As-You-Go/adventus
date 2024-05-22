import { differenceInDays, addDays } from "date-fns";

import { getAdventStartDate } from "./getAdventStartDate";
import { AdventusDate, Season } from "../types";

export const getBaseYearSet = (year: number): Partial<AdventusDate>[] => {
  const adventStart = getAdventStartDate(year);
  const adventNextYear = getAdventStartDate(year + 1);
  const yearLength = differenceInDays(adventNextYear, adventStart);
  return Array(yearLength)
    .fill(null)
    .map((_, idx) => {
      if (idx === 0) {
        return {
          date: adventStart,
          season: Season.ADVENT,
          weekOfSeason: 1,
        };
      }

      return {
        date: addDays(adventStart, idx),
      };
    });
};
