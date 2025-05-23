<script setup>
import CategoryItem from '@/components/CategoryItem.vue'

defineProps({ 
    categories: { type: Array, required: true },
    activeId: { type: Number, default: null },
})

const emit = defineEmits(['update:activeId'])

function onSelect(id) {
    emit('update:activeId', id)
}
</script>


<template>

<ul class="category-list">
    <CategoryItem
        v-for="cat in categories"
        :key="cat.id"
        :category="cat"
        :active-id="activeId"
        @select="onSelect"
    />
</ul>

</template>

<style scoped>

.category-list {
    display: flex;
    align-items: center;
    gap: 15px;
    overflow-x: auto;
    scrollbar-width: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.category-list::-webkit-scrollbar {
  display: none;
}

</style>