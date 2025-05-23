import { getCourses } from "@/services/api"
import { onMounted, ref } from "vue"


export function useCourses() {
    const courses = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function load() {
        loading.value = true
        try {
            courses.value = await getCourses()
        } catch (e) {
            error.value = e
        } finally {
            loading.value = false
        }
    }

    onMounted(load)

    return { courses, loading, error, refetch: load }
}