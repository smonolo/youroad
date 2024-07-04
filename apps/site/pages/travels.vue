<template>
  <section>
    <ListHeader
      v-model:search="search"
      :entity
      :show-filters="!!hasTravels"
      @update:open-modal="openModal('form')"
    />
    <div class="p-4 lg:px-10 lg:py-5">
      <p v-if="travelsStore.isLoading" class="font-medium">
        Loading travels...
      </p>
      <p v-else-if="!hasTravels" class="font-medium">No travels to show.</p>
      <TravelsTable
        v-else
        :travels="filteredTravels"
        @update:open-modal="modal = $event"
      />
    </div>
    <TravelFormModal :open="modal === 'form'" @update:open="modal = $event" />
    <TravelShowModal :open="modal === 'show'" @update:open="modal = $event" />
  </section>
</template>

<script setup lang="ts">
import ListHeader from '~/components/shared/ListHeader.vue'
import TravelFormModal from '~/components/travels/modals/TravelFormModal.vue'
import TravelShowModal from '~/components/travels/modals/TravelShowModal.vue'
import TravelsTable from '~/components/travels/table/TravelsTable.vue'
import { useFilteredTravels } from '~/composables/travels/useFilteredTravels'
import { useTravelsStore } from '~/pinia/travels'

export type TravelModalType = 'show' | 'form'

defineComponent({ name: 'Travels' })

useHead({ title: 'Travels - YouRoad Travels Manager' })

const travelsStore = useTravelsStore()

const modal = ref<TravelModalType | boolean>(false)
const search = ref<string>('')

const filteredTravels = useFilteredTravels(search)

const entity = 'travels'

const hasTravels = computed(() => !!travelsStore.travels.length)

onMounted(() => {
  travelsStore.fetchTravels()
})

const openModal = (modalType: TravelModalType, travelId?: string) => {
  travelsStore.selectTravel(travelId ?? undefined)

  modal.value = modalType
}
</script>
