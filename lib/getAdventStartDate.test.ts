import { getAdventStartDate } from "./getAdventStartDate";

describe("getAdventStartDate", () => {
  it("should return a date", () => {
    const result = getAdventStartDate(2024);
    expect(result).toBeInstanceOf(Date);
  });

  it("should return the correct dates", () => {
    expect(getAdventStartDate(1961)).toEqual(new Date(1960, 10, 27));
    expect(getAdventStartDate(2000)).toEqual(new Date(1999, 10, 28));
    expect(getAdventStartDate(2019)).toEqual(new Date(2018, 11, 2));
    expect(getAdventStartDate(2023)).toEqual(new Date(2022, 10, 27));
    expect(getAdventStartDate(2024)).toEqual(new Date(2023, 11, 3));
    expect(getAdventStartDate(2025)).toEqual(new Date(2024, 11, 1));
  });
});
