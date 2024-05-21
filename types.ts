export type AdventusDate = {
  date: Date;
  season: string;
  weekOfSeason: number;
};

export type Feast = {
  name: string;
  color?: string;
  rank:
    | "solemnity"
    | "memorial"
    | "optionalMemorial"
    | "feast"
    | "feastOfTheLord";
};
