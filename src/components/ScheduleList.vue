<script setup>
import { ref, computed } from 'vue'
import { formatDateRus, formatDays, formatTime } from '@/utils/date'
import { groupByDate } from '@/utils/groupLessonsByDate'
import { dateAsc, dateDesc, timeAsc, timeDesc } from '@/utils/date'
import { sortGrouped } from '@/utils/sortGrouped'
import SortControl from '@/components/SortControl.vue'

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  dateKey: { type: String, default: 'date' },
  timeKey: { type: String, default: 'time' },
  showDays: { type: Boolean, default: false },
  daysKey: { type: String, default: 'days' },
})

const dateVariant = ref('groups')
const timeVariant = ref('asc')

const grouped = computed(() => groupByDate(props.items, props.dateKey, props.timeKey))
const sortedEntries = computed(() => {
  const cmpDate = dateVariant.value === 'open' ? dateDesc : dateAsc
  const cmpTime = timeVariant.value === 'desc' ? timeDesc(props.timeKey) : timeAsc(props.timeKey)

  return sortGrouped(grouped.value, cmpDate, cmpTime)
})
</script>

<template>
  <div class="schedule">
    <h3>{{ title }}</h3>

    <SortControl label="Дата" v-model="dateVariant" asc="groups" desc="open" />
    <SortControl label="Время" v-model="timeVariant" asc="asc" desc="desc" />

    <div v-for="[iso, dayItems] in sortedEntries" :key="iso" class="day-block">
      <div class="day-head">
        <span>{{ formatDateRus(iso) }}</span>
        <span>{{ showDays ? formatDays(dayItems[0][daysKey]) : 'ВС' }}</span>
      </div>

      <ul class="time-list">
        <li v-for="it in dayItems" :key="it.id">
          {{ formatTime(it[timeKey]) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.schedule {
  padding: 15px;
}

.day-head {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.day-head span {
  color: var(--gray-4);
  font-size: 14px;
}

.time-list {
  border: 1px solid var(--gray-2);
  border-radius: 20px;
  background: var(--body);
}
.time-list li {
  padding: 10px;
  border-bottom: 1px solid var(--gray-2);
}
.time-list li:last-child {
  border-bottom: none;
}
</style>
