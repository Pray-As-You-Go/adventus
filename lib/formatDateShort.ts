const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDateShort = (value: Date) => {
  return `${value.getDate()} ${MONTHS[value.getMonth()]}`;
};
