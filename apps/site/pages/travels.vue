<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Manage Travels</h1>
      <button class="button" @click="modalOpen = true">Create travel</button>
    </div>
    <div class="mt-5">
      <p v-if="travelsStore.isLoading" class="font-medium">
        Loading travels...
      </p>
      <p v-else-if="!travelsStore.travels.length" class="font-medium">
        No travels to show.
      </p>
      <TravelsTable
        v-else
        :travels="travelsStore.travels"
        @update:selected-travel="updateTravel"
      />
    </div>
    <TravelModal
      :open="modalOpen"
      @update:open="modalOpen = $event"
      :travel="selectedTravel"
    />
  </div>
</template>

<script setup lang="ts">
import TravelModal from '~/components/travels/TravelModal.vue'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'

defineComponent({ name: 'Travels' })

useHead({ title: 'Travels - YouRoad Travels Manager' })

const travelsStore = useTravelsStore()

const modalOpen = ref<boolean>(false)
const selectedTravel = ref<Travel | undefined>(undefined)

onMounted(() => {
  travelsStore.fetchTravels()
})

const updateTravel = (travel: Travel) => {
  selectedTravel.value = travel
  modalOpen.value = true
}
</script>
