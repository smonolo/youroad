<template>
  <HomeWidget :="widget">
    <p v-if="travelsStore.isLoading">Loading travels...</p>
    <p v-else-if="!travelsStore.travels.length">No travels to show.</p>
    <ul v-else class="[&>li:first-child]:rounded-t-lg">
      <li
        v-for="(travel, key) in travelsStore.travels
          .slice(0, 6)
          .map(formatTravel)"
        :key
        class="flex cursor-pointer flex-col justify-between border-b border-neutral-200 px-2 py-2 transition-colors hover:bg-neutral-100 md:flex-row md:items-center"
        @click="showTravel(travel.id)"
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
import { useUiStore } from '~/pinia/ui'
import { formatTravel } from '~/utils/travels'

defineComponent({ name: 'HomeTravelsWidget' })

const travelsStore = useTravelsStore()
const uiStore = useUiStore()

onMounted(() => {
  travelsStore.fetchTravels()
})

const widget = {
  title: 'Travels',
  description: 'Create, edit and delete travels, and view linked bookings.',
  url: '/travels'
}

const showTravel = (id: string) => {
  travelsStore.selectTravel(id)
  uiStore.openModal('travel-show')
}
</script>
