import { computed } from 'vue'

export function useFilteredCourses(coursesRef, activeCatIdRef) {
  const filtered = computed(() => {
    const id = activeCatIdRef.value
    if (!id) return coursesRef.value

    return coursesRef.value
      .filter((course) => course.categories.some((c) => c.id === id))
      .sort((a, b) => a.name.localeCompare(b.name, 'ru'))
  })

  return { filteredCourses: filtered }
}
