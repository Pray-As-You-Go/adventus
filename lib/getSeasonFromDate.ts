import {
  isAfter,
  isBefore,
  subDays,
  subWeeks,
  isSameDay,
  addDays,
} from "date-fns";

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
    return "advent";
  } else if (isAfterOrSameDay(date, CHRISTMAS) && isBefore(date, EPIPHANY)) {
    return "christmas";
  } else if (
    isAfterOrSameDay(date, ASH_WEDNESDAY) &&
    isBefore(date, FIRST_SUNDAY_OF_LENT)
  ) {
    return "ash-wednesday";
  } else if (
    isBefore(date, PALM_SUNDAY) &&
    isAfterOrSameDay(date, FIRST_SUNDAY_OF_LENT)
  ) {
    return "lent";
  } else if (
    isAfterOrSameDay(date, PALM_SUNDAY) &&
    isBefore(date, easterDate)
  ) {
    return "holy-week";
  } else if (
    isBeforeOrSameDay(date, PENTECOST) &&
    isAfterOrSameDay(date, easterDate)
  ) {
    return "easter";
  }
  return "ordinary";
};
