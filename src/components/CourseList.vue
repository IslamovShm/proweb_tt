<script setup>
import { ref } from 'vue'
import CourseItem from '@/components/CourseItem.vue'
import { useDragWheelScroll } from '@/hooks/useDragWheelScroll'

const props = defineProps({
  courses: { type: Array, required: true },
})

const wrap = ref(null)
useDragWheelScroll(wrap)
</script>

<template>
  <div class="courses-wrapper" ref="wrap">
    <CourseItem v-for="course in courses" :key="course.id" :course="course" />
  </div>
</template>

<style scoped>
.courses-wrapper {
  display: flex;
  gap: 15px;
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  user-select: none;
}
.courses-wrapper::-webkit-scrollbar {
  display: none;
}
.courses-wrapper.dragging {
  cursor: grabbing;
}
</style>
