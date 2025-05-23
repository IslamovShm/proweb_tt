import { getContrastColor } from '@/utils/getConstrastColor'

const BASE = 'https://main.proweb.uz/api/v1'

function buildUrl(path) {
  return `${BASE}${path}`
}

export async function fetchJson(path) {
  const response = await fetch(buildUrl(path), {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })

  const text = await response.text()

  if (!response.ok) {
    const err = new Error(`HTTP ${response.status}: ${response.statusText}`)
    err.payload = text
    throw err
  }

  return text ? JSON.parse(text) : undefined
}

export async function getCourses() {
  const { results: courses = [] } = await fetchJson('/launches/external/course/research/')

  courses.forEach((course) => {
    course.categories?.forEach((cat) => {
      if (!cat.textColor) {
        cat.textColor = getContrastColor(cat.color)
      }
    })
  })

  return courses
}
