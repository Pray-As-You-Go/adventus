import {
  isAfter,
  isBefore,
  subDays,
  subWeeks,
  isSameDay,
  addDays,
} from "date-fns";
import { Season } from "../types";

const isAfterOrSameDay = (date: Date, dateToCompare: Date) =>
  isAfter(date, dateToCompare) || isSameDay(date, dateToCompare);

const isBeforeOrSameDay = (date: Date, dateToCompare: Date) =>
  isBefore(date, dateToCompare) || isSameDay(date, dateToCompare);

export const getSeasonFromDate = (
  date: Date,
  adventStart: Date,
  easterDate: Date,
) => {
  const CHRISTMAS = new Date(adventStart.getFullYear(), 11, 25);
  const EPIPHANY = new Date(easterDate.getFullYear(), 0, 6);
  const ASH_WEDNESDAY = subDays(easterDate, 46);
  const FIRST_SUNDAY_OF_LENT = addDays(ASH_WEDNESDAY, 4);
  const PALM_SUNDAY = subWeeks(easterDate, 1);
  const PENTECOST = addDays(easterDate, 50);

  if (isBefore(date, CHRISTMAS) && isAfterOrSameDay(date, adventStart)) {
    return Season.ADVENT;
  } else if (isAfterOrSameDay(date, CHRISTMAS) && isBefore(date, EPIPHANY)) {
    return Season.CHRISTMAS;
  } else if (
    isAfterOrSameDay(date, ASH_WEDNESDAY) &&
    isBefore(date, FIRST_SUNDAY_OF_LENT)
  ) {
    return Season.ASH_WEDNESDAY;
  } else if (
    isBefore(date, PALM_SUNDAY) &&
    isAfterOrSameDay(date, FIRST_SUNDAY_OF_LENT)
  ) {
    return Season.LENT;
  } else if (
    isAfterOrSameDay(date, PALM_SUNDAY) &&
    isBefore(date, easterDate)
  ) {
    return Season.HOLY_WEEK;
  } else if (
    isBeforeOrSameDay(date, PENTECOST) &&
    isAfterOrSameDay(date, easterDate)
  ) {
    return Season.EASTER;
  }
  return Season.ORDINARY;
};
