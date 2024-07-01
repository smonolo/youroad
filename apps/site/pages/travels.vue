<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Manage Travels</h1>
      <input
        v-if="!!travelsStore.travels.length"
        v-model="search"
        class="input w-[400px]"
        placeholder="Search travels..."
      />
      <button class="button" @click="modalOpen = 'form'">Create travel</button>
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
        :travels="filteredTravels"
        @update:selected-travel="updateSelectedTravel"
      />
    </div>
    <TravelFormModal
      :open="modalOpen === 'form'"
      @update:open="updateModalOpen"
      :travel="selectedTravel"
    />
    <TravelShowModal
      v-if="selectedTravel"
      :open="modalOpen === 'show'"
      @update:open="updateModalOpen"
      :travel="selectedTravel"
    />
  </div>
</template>

<script setup lang="ts">
import TravelFormModal from '~/components/travels/modals/TravelFormModal.vue'
import TravelShowModal from '~/components/travels/modals/TravelShowModal.vue'
import TravelsTable from '~/components/travels/table/TravelsTable.vue'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'

type ModalType = 'show' | 'form'

export type SelectedTravelPayload = {
  travel?: Travel
  action: ModalType
}

defineComponent({ name: 'Travels' })

useHead({ title: 'Travels - YouRoad Travels Manager' })

const travelsStore = useTravelsStore()

const modalOpen = ref<ModalType | boolean>(false)
const selectedTravel = ref<Travel | undefined>(undefined)
const search = ref<string>('')

const filteredTravels = computed(() =>
  travelsStore.travels.filter(t =>
    t.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

onMounted(() => {
  travelsStore.fetchTravels()
})

const updateSelectedTravel = (payload: SelectedTravelPayload) => {
  selectedTravel.value = payload.travel
  modalOpen.value = payload.action
}

const updateModalOpen = (value: boolean) => {
  selectedTravel.value = undefined
  modalOpen.value = value
}
</script>
