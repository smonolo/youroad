<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Manage Travels</h1>
      <button class="button" @click="modalOpen = true">Create travel</button>
    </div>
    <div class="mt-6">
      <p v-if="travelsStore.isLoading" class="font-medium">
        Loading travels...
      </p>
      <p v-else-if="!travelsStore.travels.length" class="font-medium">
        No travels to show.
      </p>
      <TravelsTable
        v-else
        :travels="travelsStore.travels"
        @update:selected-travel="onSelectedTravel"
      />
    </div>
    <TravelEditModal
      :open="modalOpen === 'edit'"
      @update:open="modalOpen = $event"
      :travel="selectedTravel"
    />
  </div>
</template>

<script setup lang="ts">
import TravelEditModal from '~/components/travels/modals/TravelEditModal.vue'
import TravelsTable from '~/components/travels/table/TravelsTable.vue'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'

type ModalType = 'show' | 'edit'

export type SelectedTravelPayload = {
  travel?: Travel
  action: ModalType
}

defineComponent({ name: 'Travels' })

useHead({ title: 'Travels - YouRoad Travels Manager' })

const travelsStore = useTravelsStore()

const modalOpen = ref<ModalType | boolean>(false)
const selectedTravel = ref<Travel | undefined>(undefined)

onMounted(() => {
  travelsStore.fetchTravels()
})

const onSelectedTravel = (payload: SelectedTravelPayload) => {
  selectedTravel.value = payload.travel
  modalOpen.value = payload.action
}
</script>
