export function groupByDate(arr = [], dateKey = 'date', timeKey = 'time') {
  const sorted = [...arr].sort((a, b) =>
    `${a[dateKey]}T${a[timeKey]}`.localeCompare(`${b[dateKey]}T${b[timeKey]}`)
  );
  return sorted.reduce((acc, x) => {
    (acc[x[dateKey]] ??= []).push(x);
    return acc;
  }, {});
}