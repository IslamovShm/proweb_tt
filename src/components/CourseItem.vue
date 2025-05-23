<script setup>
import ScheduleList from '@/components/ScheduleList.vue'

defineProps({
  course: { type: Object, required: true },
})
</script>

<template>
  <div class="course-item" v-if="course.groups.length > 0 || course.open_lessons.length > 0">
    <h4 class="course-title">
      <span>{{ course.name }}</span>
      <CategoryTag v-for="cat in course.categories" :key="cat.id" :cat="cat" />
    </h4>

    <ScheduleList
      :title="'Старт групп'"
      :items="course.groups"
      date-key="start_date"
      time-key="study_time"
      :show-days="true"
      days-key="days"
      style="background: var(--white); border-radius: 20px 20px 0 0"
    />

    <ScheduleList
      :title="'Открытые уроки'"
      :items="course.open_lessons"
      date-key="date"
      time-key="time"
      :show-days="false"
      style="background: var(--beige); border-radius: 0 0 20px 20px"
    />
  </div>
</template>

<style scoped>
.course-item {
  min-width: 486px;
}

.course-title {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.course-title span {
  color: var(--gray-3);
}

@media (max-width: 1200px) {
  .course-item {
    min-width: 350px;
  }
}
</style>
