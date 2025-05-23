export function sortGrouped (grouped, cmpDate, cmpTime) {
  const entries = Object.entries(grouped)

  entries.sort(cmpDate)
  entries.forEach(([, lessons]) => lessons.sort(cmpTime))

  return entries
}