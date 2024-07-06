<template>
  <HomeWidget :="widget">
    <p v-if="travelsStore.isLoading">Loading travels...</p>
    <p v-else-if="!travelsStore.travels.length">No travels to show.</p>
    <QuickList v-else :items />
  </HomeWidget>
</template>

<script setup lang="ts">
import HomeWidget from '~/components/home/HomeWidget.vue'
import { useTravelsStore } from '~/pinia/travels'
import { formatTravel } from '~/utils/travels'
import QuickList from '~/components/shared/QuickList.vue'
import { useShowTravel } from '~/composables/travels/useShowTravel'

defineComponent({ name: 'HomeTravelsWidget' })

const travelsStore = useTravelsStore()
const { showTravel } = useShowTravel()

onMounted(() => {
  travelsStore.fetchTravels()
})

const items = computed(() =>
  travelsStore.travels
    .slice(0, 6)
    .map(formatTravel)
    .map(travel => ({
      primaryText: travel.name,
      secondaryText: `${travel.start_date} - ${travel.end_date}`,
      action: () => showTravel(travel.id)
    }))
)

const widget = {
  title: 'Travels',
  description: 'Create, edit and delete travels, and view linked bookings.',
  url: '/travels'
}
</script>
