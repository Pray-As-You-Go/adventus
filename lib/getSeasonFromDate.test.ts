import { getSeasonFromDate } from "./getSeasonFromDate";

describe("getSeasonFromDate", () => {
  const advent = new Date(2023, 11, 3);
  const easter = new Date(2024, 2, 31);

  it("should return a string", () => {
    expect(
      typeof getSeasonFromDate(
        new Date(2012, 1, 1),
        new Date(2012, 1, 1),
        new Date(2012, 1, 1),
      ),
    ).toBe("string");
  });

  it("should return advent when the date is the first Sunday of Advent", () => {
    expect(getSeasonFromDate(new Date(2023, 11, 3), advent, easter)).toBe(
      "advent",
    );
  });

  it("should return advent when the date is before Christmas but after the first Sunday of Advent", () => {
    expect(getSeasonFromDate(new Date(2023, 11, 4), advent, easter)).toBe(
      "advent",
    );
  });

  it("should return christmas when the date is Christmas", () => {
    expect(getSeasonFromDate(new Date(2023, 11, 25), advent, easter)).toBe(
      "christmas",
    );
  });

  it("should return christmas when the date is after Christmas but before Epiphany", () => {
    expect(getSeasonFromDate(new Date(2023, 11, 30), advent, easter)).toBe(
      "christmas",
    );
  });

  it("should return ordinary when the date is after Epiphany but before Ash Wednesday", () => {
    expect(getSeasonFromDate(new Date(2024, 1, 2), advent, easter)).toBe(
      "ordinary",
    );
  });

  it("should return ash-wednesday when the date is Ash Wednesday", () => {
    expect(getSeasonFromDate(new Date(2024, 1, 14), advent, easter)).toBe(
      "ash-wednesday",
    );
  });

  it("should return ash-wednesday when the date is before the first Sunday of Lent but after Ash Wednesday", () => {
    expect(getSeasonFromDate(new Date(2024, 1, 15), advent, easter)).toBe(
      "ash-wednesday",
    );
  });

  it("should return lent when the date is the first Sunday of Lent", () => {
    expect(getSeasonFromDate(new Date(2024, 1, 18), advent, easter)).toBe(
      "lent",
    );
  });

  it("should return lent when the date is after first Sunday of Lent and before Palm Sunday", () => {
    expect(getSeasonFromDate(new Date(2024, 1, 28), advent, easter)).toBe(
      "lent",
    );
  });

  it("should return holy-week when the date is Palm Sunday", () => {
    expect(getSeasonFromDate(new Date(2024, 2, 24), advent, easter)).toBe(
      "holy-week",
    );
  });

  it("should return holy-week when the date is after Palm Sunday but before Easter", () => {
    expect(getSeasonFromDate(new Date(2024, 2, 29), advent, easter)).toBe(
      "holy-week",
    );
  });

  it("should return easter when the date is Easter", () => {
    expect(getSeasonFromDate(new Date(2024, 2, 31), advent, easter)).toBe(
      "easter",
    );
  });

  it("should return easter when the date is after Easter and before Pentecost", () => {
    expect(getSeasonFromDate(new Date(2024, 3, 5), advent, easter)).toBe(
      "easter",
    );
  });

  it("should return easter when the date is Pentecost", () => {
    expect(getSeasonFromDate(new Date(2024, 4, 19), advent, easter)).toBe(
      "easter",
    );
  });

  it("should return ordinary when the date is after Pentecost", () => {
    expect(getSeasonFromDate(new Date(2024, 7, 20), advent, easter)).toBe(
      "ordinary",
    );
  });
});
