<script setup>
const props = defineProps({
  label: { type: String, required: true },
  icon: { type: String, required: true },
  route: { type: String, required: true },
})
</script>

<template>
  <li>
    <router-link :to="route">
      <img :src="icon" alt="icon" />
      <span>{{ label }}</span>
    </router-link>
  </li>
</template>

<style></style>
