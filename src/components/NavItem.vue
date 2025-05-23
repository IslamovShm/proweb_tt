<script setup>
const props = defineProps({
  label: { type: String, required: true },
  icon: { type: String, required: true },
  route: { type: String, required: true },
})
</script>

<template>
  <li class="nav-item">
    <router-link 
      :to="route"
      active-class="active"
    >
      <img :src="icon" alt="icon" />
      <span>{{ label }}</span>
    </router-link>
  </li>
</template>

<style scoped>

.nav-item a {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 15px;
  border-radius: 11px;
  background-color: transparent;
  font-size: 18px;
}

.nav-item a.active {
  background-color: var(--beige);
}

</style>
