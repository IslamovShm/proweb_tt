import { computed } from 'vue'

export function useCategories(coursesRef) {
  const categories = computed(() => {
    const map = new Map()

    coursesRef.value?.forEach((course) => {
      course.categories?.forEach((cat) => {
        if (!map.has(cat.id)) {
          map.set(cat.id, cat)
        }
      })
    })

    return [...map.values()]
  })

  return { categories }
}
