import { getBaseYearSet } from "./getBaseYearSet";

describe("getBaseYearSet", () => {
  it("should return an array of Adventus Dates", () => {
    const result = getBaseYearSet(2024);
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toMatchObject({
      date: new Date(2023, 11, 3),
    });
  });

  it("should return an array of the correct length", () => {
    const result = getBaseYearSet(2024);
    expect(result).toHaveLength(364);
    expect(result[363]).toMatchObject({
      date: new Date(2024, 10, 30),
    });
  });
});
