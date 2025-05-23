<script setup>
import { ref } from 'vue'
import { useCourses } from '@/hooks/useCourses'
import { useCategories } from '@/hooks/useCategories'
import { useFilteredCourses } from '@/hooks/useFilteredCourses'
import CategoryList from '@/components/CategoryList.vue'

const { courses, loading, error } = useCourses()
const { categories } = useCategories(courses)
const activeCategoryId = ref(null)
const { filteredCourses } = useFilteredCourses(courses, activeCategoryId)

</script>

<template>
  <main>
    <p v-if="loading">Загружаем</p>
    <p v-else-if="error">Ошибка {{ error.message }}</p>

    <section v-else>
      <h1 class="main-title subtitle">Запуски</h1>
      <div class="categories">
        <h2 class="category-title subtitle">Категории</h2>
        <CategoryList 
          :categories="categories" 
          v-model:active-id="activeCategoryId"
        />
      </div>
      
    </section>
  </main>
</template>

<style scoped>
.main-title,
.categories {
  padding: 20px;
}

.categories {
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
