export type AdventusDate = {
  date: Date;
  season: SeasonType;
  weekOfSeason: number;
  dayOfSeason: number;
  feasts: Feast[];
};

export const Season = {
  ADVENT: "advent",
  CHRISTMAS: "christmas",
  ORDINARY: "ordinary",
  LENT: "lent",
  EASTER: "easter",
  HOLY_WEEK: "holy-week",
  ASH_WEDNESDAY: "ash-wednesday",
};

export type SeasonType = (typeof Season)[keyof typeof Season];

export type Feast = {
  title: string;
  subtitle?: string;
  rank:
    | "solemnity"
    | "memorial"
    | "optionalMemorial"
    | "feast"
    | "feastOfTheLord";
};
