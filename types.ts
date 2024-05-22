export type AdventusDate = {
  date: Date;
  season: string;
  weekOfSeason: number;
  dayOfSeason: number;
  feasts: Feast[];
};

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
