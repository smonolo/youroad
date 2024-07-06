<template>
  <section>
    <Header
      v-model:search="search"
      :entity
      :entitiesAmount="travelsStore.travels.length"
    >
      <template #actions>
        <button
          class="input flex w-fit items-baseline gap-x-1 transition-colors hover:bg-neutral-100"
          @click="travelsStore.fetchTravels({ refresh: true })"
          :disabled="travelsStore.isLoading"
        >
          <i class="bi bi-arrow-clockwise text-sm" />
          <span class="block">Refresh</span>
        </button>
      </template>
    </Header>
    <div class="p-4 lg:px-10 lg:py-5">
      <p v-if="travelsStore.isLoading" class="font-medium">
        Loading travels...
      </p>
      <p v-else-if="!hasTravels" class="font-medium">No travels to show.</p>
      <TravelsTable v-else :travels="filteredTravels" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Header from '~/components/shared/Header.vue'
import TravelsTable from '~/components/travels/table/TravelsTable.vue'
import { useFilteredTravels } from '~/composables/travels/useFilteredTravels'
import { useBookingsStore } from '~/pinia/bookings'
import { useTravelsStore } from '~/pinia/travels'

defineComponent({ name: 'Travels' })

useHead({ title: 'Travels - YouRoad Travels Manager' })

const travelsStore = useTravelsStore()
const bookingsStore = useBookingsStore()

const search = ref<string>('')

const filteredTravels = useFilteredTravels(search)

const entity = 'travel'

const hasTravels = computed(() => !!travelsStore.travels.length)

onMounted(() => {
  travelsStore.fetchTravels()
  bookingsStore.fetchBookings()
})
</script>
