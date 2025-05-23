<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header class="header">
    <div class="header-content">
      <Logo />

      <Navbar class="navbar" />
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
  max-width: 400px;
  width: 100%;
  background-color: var(--body);
  flex: 0 0 400px;
}

.header-content {
  border-right: 1px solid var(--gray);
  padding: 0 20px;
  height: 100%;
}

.navbar {
  margin-top: 50px;
}

@media (max-width: 1200px) {
  .header {
    flex: 0 0 100px;
  }
}
</style>
