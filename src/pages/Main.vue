<script setup>
import { ref } from 'vue'
import { useCourses } from '@/hooks/useCourses'
import { useCategories } from '@/hooks/useCategories'
import { useFilteredCourses } from '@/hooks/useFilteredCourses'
import CategoryList from '@/components/CategoryList.vue'
import CourseList from '@/components/CourseList.vue'

const { courses, loading, error } = useCourses()
const { categories } = useCategories(courses)
const activeCategoryId = ref(null)
const { filteredCourses } = useFilteredCourses(courses, activeCategoryId)

</script>

<template>
  <main>
    <p v-if="loading" class="load">Загружаем</p>
    <p v-else-if="error" class="error">Ошибка {{ error.message }}</p>

    <section v-else>
      <Title>Запуски</Title>
      <div class="categories">
        <h2 class="category-title subtitle">Категории</h2>
        <CategoryList 
          :categories="categories" 
          v-model:active-id="activeCategoryId"
        />
      </div>
      <CourseList :courses="filteredCourses" />
    </section>
  </main>
</template>

<style scoped>
.categories {
  padding: 20px;
}

.categories {
  border-bottom: 1px solid var(--gray);
  display: flex;
  align-items: center;
  gap: 15px;
}

.load,
.error {
  padding: 20px;
  text-align: center;
  font-size: 30px;
}
</style>
