<script setup>
defineOptions({ name: 'Title' })
</script>

<template>
  <h1 class="main-title subtitle">
    <slot></slot>
  </h1>
</template>

<style scoped>
.main-title {
  padding: 20px;
  border-bottom: 1px solid var(--gray);
}
</style>
