export default function addZeroToDate(day) {
  if (day < 10) {
    return `0${day}`;
  }
  return day;
}
