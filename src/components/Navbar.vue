<script setup>
import NavItem from '@/components/NavItem.vue'
import flag from '@/assets/flag.svg'
import person from '@/assets/person.svg'

const navItems = [
  { label: 'Запуски', icon: flag, route: '/' },
  { label: 'Обо мне', icon: person, route: '/about' },
]
</script>

<template>
  <nav>
    <ul>
      <NavItem
        v-for="item in navItems"
        :key="item.label"
        :label="item.label"
        :icon="item.icon"
        :route="item.route"
      />
    </ul>
  </nav>
</template>

<style scoped></style>
