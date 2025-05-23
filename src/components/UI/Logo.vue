<script setup>
defineOptions({ name: 'Logo' })
</script>

<template>
  <h1 class="logo">PROWEB</h1>
</template>

<style scoped>
.logo {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: var(--black-2);
}

@media (max-width: 1200px) {
  .logo {
    font-size: 20px;
    color: var(--black-2);
  }
}
</style>
