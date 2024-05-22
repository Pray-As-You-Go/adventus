import { Feast } from "../types";
import { makeFeast } from "./fixedFeasts";
import {
  addDays,
  addWeeks,
  closestTo,
  nextSunday,
  nextThursday,
  previousSunday,
  subDays,
  subWeeks,
} from "date-fns";
import { getAdventStartDate } from "../lib/getAdventStartDate";
import { formatDateShort } from "../lib/formatDateShort";

type MoveableFeast = {
  feast: Feast;
  getDate: (adventStartDate: Date, easterDate: Date) => Date;
};

export const getMoveableFeasts = (adventStartDate: Date, easterDate: Date) =>
  [
    {
      feast: makeFeast("Most Holy Name of Jesus", "optionalMemorial"),
      getDate: (_, easter) => {
        // First Sunday of January
        // unless it falls on January 1st, 6th, or 7th, in which case it is celebrated on January 2nd
        const date = new Date(easter.getFullYear(), 0, 1);
        const sunday = nextSunday(date);

        if (sunday.getDate() === 6 || sunday.getDate() === 7) {
          return new Date(easter.getFullYear(), 0, 2);
        }

        return sunday;
      },
    },
    {
      feast: makeFeast("Epiphany of the Lord", "feast"),
      getDate: (_, easter) => {
        // Closest Sunday to January 6th
        const epiphany = new Date(easter.getFullYear(), 0, 6);
        return closestTo(epiphany, [
          previousSunday(epiphany),
          nextSunday(epiphany),
        ]);
      },
    },
    {
      feast: makeFeast("Baptism of the Lord", "feastOfTheLord"),
      getDate: (_, easter) => {
        // First Sunday after Epiphany Sunday
        const epiphany = new Date(easter.getFullYear(), 0, 6);
        const epiphanySunday = closestTo(epiphany, [
          previousSunday(epiphany),
          nextSunday(epiphany),
        ]);
        return nextSunday(epiphanySunday);
      },
    },
    {
      feast: makeFeast("Shrove Tuesday", "optionalMemorial"),
      getDate: (_, easter) => {
        const ashWednesday = subDays(easter, 46);
        return subDays(ashWednesday, 1);
      },
    },
    {
      feast: makeFeast("Ash Wednesday", "solemnity"),
      getDate: (_, easter) => subDays(easter, 46),
    },
    {
      feast: makeFeast("Palm Sunday", "solemnity"),
      getDate: (_, easter) => subWeeks(easter, 1),
    },
    {
      feast: makeFeast("Maundy Thursday", "solemnity"),
      getDate: (_, easter) => subDays(easter, 3),
    },
    {
      feast: makeFeast("Good Friday", "solemnity"),
      getDate: (_, easter) => subDays(easter, 2),
    },
    {
      feast: makeFeast("Holy Saturday", "solemnity"),
      getDate: (_, easter) => subDays(easter, 1),
    },
    {
      feast: makeFeast("Easter Sunday", "solemnity"),
      getDate: (_, easter) => easter,
    },
    {
      feast: makeFeast("Easter Monday", "solemnity"),
      getDate: (_, easter) => addDays(easter, 1),
    },
    {
      feast: makeFeast("Divine Mercy Sunday", "feast"),
      getDate: (_, easter) => addWeeks(easter, 1),
    },
    {
      feast: makeFeast("Ascension of the Lord", "solemnity"),
      getDate: (_, easter) => addDays(easter, 39),
    },
    {
      feast: makeFeast("Pentecost", "solemnity"),
      getDate: (_, easter) => addDays(easter, 49),
    },
    {
      feast: makeFeast("Trinity Sunday", "solemnity"),
      getDate: (_, easter) => {
        const pentecost = addDays(easter, 49);
        return nextSunday(pentecost);
      },
    },
    {
      feast: makeFeast("Corpus Christi", "solemnity"),
      getDate: (_, easter) => {
        const trinitySunday = nextSunday(addDays(easter, 49));
        return nextThursday(trinitySunday);
      },
    },
    {
      feast: makeFeast("The Most Sacred Heart of Jesus", "solemnity"),
      getDate: (_, easter) => {
        const pentecost = addDays(easter, 49);
        return addDays(pentecost, 19);
      },
    },
    {
      feast: makeFeast("Christ the King", "solemnity"),
      getDate: (_, easter) => {
        const nextAdvent = getAdventStartDate(easter.getFullYear() + 1);
        return subWeeks(nextAdvent, 1);
      },
    },
  ].reduce((acc, { feast, getDate }) => {
    const date = getDate(adventStartDate, easterDate);
    acc[formatDateShort(date)] = [feast];
    return acc;
  }, {});
