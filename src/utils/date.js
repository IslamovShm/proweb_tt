export function formatDateRus(isoDate) {
  const date = new Date(isoDate)
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

const WEEK_ABBR = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
export function formatDays(days) {
  return days
    .sort((a, b) => a - b)
    .map((idx) => WEEK_ABBR[idx])
    .join(', ')
}

export function formatTime(time) {
  return time.slice(0, 5)
}

export const dateAsc = (a, b) => new Date(a[0]) - new Date(b[0])
export const dateDesc = (a, b) => new Date(b[0]) - new Date(a[0])

export const timeAsc =
  (key = 'time') =>
  (a, b) =>
    a[key].localeCompare(b[key])
export const timeDesc =
  (key = 'time') =>
  (a, b) =>
    -a[key].localeCompare(b[key])
