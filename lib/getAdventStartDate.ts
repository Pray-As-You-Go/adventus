import { startOfWeek, differenceInDays, addWeeks } from "date-fns";

/**
 *
 * @param {number} churchYear - The full year of the Church year as it will be at Easter
 *                              Sunday (e.g. 2024 means that Advent begins in 2023)
 */
export const getAdventStartDate = (churchYear: number) => {
  const stAndrewsDay = new Date(churchYear - 1, 10, 30);
  const nearestSunday = startOfWeek(stAndrewsDay);

  if (differenceInDays(stAndrewsDay, nearestSunday) < 4) {
    return nearestSunday;
  }

  return addWeeks(nearestSunday, 1);
};
