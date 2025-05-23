<script setup>
const props = defineProps({
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  asc: { type: String, required: true },
  desc: { type: String, required: true },
})

const emit = defineEmits(['update:modelValue'])

function setAsc() {
  emit('update:modelValue', props.asc)
}
function setDesc() {
  emit('update:modelValue', props.desc)
}
</script>

<template>
  <div class="sort-control">
    <span class="label">{{ label }}</span>

    <div class="btns">
      <button :class="{ active: modelValue === asc }" @click="setAsc">↑</button>
      <button :class="{ active: modelValue === desc }" @click="setDesc">↓</button>
    </div>
  </div>
</template>

<style scoped>
.sort-control {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 8px 0;
}
.label {
  min-width: 50px;
}

.btns {
  display: flex;
  gap: 8px;
}
.btns button {
  padding: 2px 6px;
  border: 1px solid var(--gray-3);
  border-radius: 6px;
  background: var(--body);
  cursor: pointer;
  font-size: 14px;
}
.btns button.active {
  background: orangered;
  color: #fff;
}
</style>
