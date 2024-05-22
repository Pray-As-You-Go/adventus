import { formatOrdinalNumber } from "./ordinalNumber";

describe("formatOrdinalNumber", () => {
  it("should return an object", () => {
    expect(formatOrdinalNumber(1)).toEqual(expect.any(Object));
  });

  it("should format a single digit number", () => {
    expect(formatOrdinalNumber(1)).toEqual({
      textual: "first",
      numeric: "1st",
    });
  });

  it("should format a double-digit teens number", () => {
    expect(formatOrdinalNumber(11)).toEqual({
      textual: "eleventh",
      numeric: "11th",
    });
    expect(formatOrdinalNumber(10)).toEqual({
      textual: "tenth",
      numeric: "10th",
    });
  });

  it("should format a double-digit tens number", () => {
    expect(formatOrdinalNumber(20)).toEqual({
      textual: "twentieth",
      numeric: "20th",
    });
    expect(formatOrdinalNumber(30)).toEqual({
      textual: "thirtieth",
      numeric: "30th",
    });
    expect(formatOrdinalNumber(40)).toEqual({
      textual: "fortieth",
      numeric: "40th",
    });
    expect(formatOrdinalNumber(50)).toEqual({
      textual: "fiftieth",
      numeric: "50th",
    });
    expect(formatOrdinalNumber(60)).toEqual({
      textual: "sixtieth",
      numeric: "60th",
    });
    expect(formatOrdinalNumber(70)).toEqual({
      textual: "seventieth",
      numeric: "70th",
    });
    expect(formatOrdinalNumber(80)).toEqual({
      textual: "eightieth",
      numeric: "80th",
    });
    expect(formatOrdinalNumber(90)).toEqual({
      textual: "ninetieth",
      numeric: "90th",
    });
  });

  it("should format a double-digit number with a ones place", () => {
    expect(formatOrdinalNumber(21)).toEqual({
      textual: "twenty-first",
      numeric: "21st",
    });
    expect(formatOrdinalNumber(32)).toEqual({
      textual: "thirty-second",
      numeric: "32nd",
    });
    expect(formatOrdinalNumber(43)).toEqual({
      textual: "forty-third",
      numeric: "43rd",
    });
    expect(formatOrdinalNumber(54)).toEqual({
      textual: "fifty-fourth",
      numeric: "54th",
    });
    expect(formatOrdinalNumber(65)).toEqual({
      textual: "sixty-fifth",
      numeric: "65th",
    });
    expect(formatOrdinalNumber(76)).toEqual({
      textual: "seventy-sixth",
      numeric: "76th",
    });
    expect(formatOrdinalNumber(87)).toEqual({
      textual: "eighty-seventh",
      numeric: "87th",
    });
    expect(formatOrdinalNumber(98)).toEqual({
      textual: "ninety-eighth",
      numeric: "98th",
    });
  });
});
