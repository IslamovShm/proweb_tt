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
  max-width: 400px;
  width: 100%;
  padding: 20px 0;
}

.header-content {
  border-right: 1px solid var(--gray);
  padding: 0 20px;
  height: 100%;
}

.navbar {
  margin-top: 50px;
}

</style>
