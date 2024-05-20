import { getEasterDate } from "./getEasterDate";

describe("getEasterDate", () => {
  it("should return a date", () => {
    const result = getEasterDate(2024);
    expect(result).toBeInstanceOf(Date);
  });

  it("should return the correct dates", () => {
    expect(getEasterDate(1961)).toEqual(new Date(1961, 3, 2));
    expect(getEasterDate(2000)).toEqual(new Date(2000, 3, 23));
    expect(getEasterDate(2019)).toEqual(new Date(2019, 3, 21));
    expect(getEasterDate(2023)).toEqual(new Date(2023, 3, 9));
    expect(getEasterDate(2024)).toEqual(new Date(2024, 2, 31));
    expect(getEasterDate(2025)).toEqual(new Date(2025, 3, 20));
  });
});
