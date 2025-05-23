<script setup>
const defineProps = defineProps({
  cat: { type: Object, required: true },
})

defineOptions({ name: 'CategoryTag' })
</script>

<template>
  <span class="category-tag" :style="{ backgroundColor: cat.color, color: cat.textColor }">
    {{ cat.name }}
  </span>
</template>

<style scoped>
.category-tag {
  font-size: 12px;
  padding: 4px 7px;
  border-radius: 50px;
  white-space: nowrap;
}
</style>
