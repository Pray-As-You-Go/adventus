import { getBaseYearSet } from "./lib/getBaseYearSet";
import { AdventusDate } from "./types";
import { fillInDays } from "./lib/fillInDays";
import { differenceInDays } from "date-fns";

export const today = (date: Date): AdventusDate => {
  const churchYear = fillInDays(getBaseYearSet(date.getFullYear()));
  const firstDate = churchYear[0];

  const dateIdx = differenceInDays(date, firstDate.date);
  return churchYear[dateIdx];
};

(() => {
  const [date] = process.argv.slice(2);
  const day = today(new Date(date));
  console.log(day);
})();
