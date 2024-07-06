<template>
  <HomeWidget :="widget">
    <p v-if="travelsStore.isLoading">Loading travels...</p>
    <p v-else-if="!travelsStore.travels.length">No travels to show.</p>
    <ul v-else>
      <li
        v-for="(travel, key) in travelsStore.travels
          .slice(0, 6)
          .map(formatTravel)"
        :key
        class="flex flex-col justify-between border-b border-neutral-200 py-2 md:flex-row md:items-center"
      >
        <span class="block font-medium">{{ travel.name }}</span>
        <span class="block">
          {{ travel.start_date }} - {{ travel.end_date }}
        </span>
      </li>
    </ul>
  </HomeWidget>
</template>

<script setup lang="ts">
import HomeWidget from '~/components/home/HomeWidget.vue'
import { useTravelsStore } from '~/pinia/travels'
import { formatTravel } from '~/utils/travels'

defineComponent({ name: 'HomeTravelsWidget' })

const travelsStore = useTravelsStore()

onMounted(() => {
  travelsStore.fetchTravels()
})

const widget = {
  title: 'Travels',
  description: 'Create, edit and delete travels, and view linked bookings.',
  url: '/travels'
}
</script>
