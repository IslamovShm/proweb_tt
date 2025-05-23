<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: { type: Object, required: true },
  activeId: { type: Number, default: null },
})

const emit = defineEmits(['select'])

const isActive = computed(() => props.activeId === props.category.id)

function handleClick() {
  emit('select', isActive.value ? null : props.category.id)
}
</script>

<template>
  <li
    class="category-item"
    :style="
      isActive
        ? {
            backgroundColor: category.color,
            color: category.textColor,
          }
        : {}
    "
    @click="handleClick"
  >
    {{ category.name }}
  </li>
</template>

<style scoped>
.category-item {
  padding: 8px 12px;
  border-radius: 50px;
  background-color: var(--gray-2);
  min-width: fit-content;
  cursor: pointer;
  white-space: nowrap;
}
</style>
