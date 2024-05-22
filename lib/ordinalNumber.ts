const intl = new Intl.PluralRules("en-UK", { type: "ordinal" });

const SUFFIXES = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);

const ONES = new Map([
  [1, "first"],
  [2, "second"],
  [3, "third"],
  [4, "fourth"],
  [5, "fifth"],
  [6, "sixth"],
  [7, "seventh"],
  [8, "eighth"],
  [9, "ninth"],
  [10, "tenth"],
]);

const TEENS = new Map([
  [11, "eleventh"],
  [12, "twelveth"],
  [13, "thirteenth"],
  [14, "fourteenth"],
  [15, "fifteenth"],
  [16, "sixteenth"],
  [17, "seventeenth"],
  [18, "eighteenth"],
  [19, "nineteenth"],
]);

const TENS = new Map([
  [2, "twenty"],
  [3, "thirty"],
  [4, "forty"],
  [5, "fifty"],
  [6, "sixty"],
  [7, "seventy"],
  [8, "eighty"],
  [9, "ninety"],
]);

const tensReplacer = (value: string) => {
  return value.replace(/y$/, "ieth");
};

const getPlaces = (value: number) => {
  const [tens, ones] = value.toString(10).split("");
  return { tens: parseInt(tens, 10), ones: parseInt(ones, 10) };
};

const getTextualValue = (value: number) => {
  if (value < 11) {
    return ONES.get(value);
  } else if (value < 20) {
    return TEENS.get(value);
  }

  const places = getPlaces(value);

  if (places.ones === 0) {
    return tensReplacer(TENS.get(places.tens));
  }

  return `${TENS.get(places.tens)}-${ONES.get(places.ones)}`;
};

export const formatOrdinalNumber = (value: number) => {
  const rule = intl.select(value);

  return {
    textual: getTextualValue(value),
    numeric: `${value}${SUFFIXES.get(rule)}`,
  };
};
