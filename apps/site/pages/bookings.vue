<template>
  <section>
    <Header
      v-model:search="search"
      :entity
      :entities-amount="bookingsStore.bookings.length"
    >
      <template #actions>
        <button
          class="input flex w-fit items-baseline gap-x-1 transition-colors hover:bg-neutral-100"
          @click="bookingsStore.fetchBookings({ refresh: true })"
          :disabled="bookingsStore.isLoading"
        >
          <i class="bi bi-arrow-clockwise text-sm" />
          <span class="block">Refresh</span>
        </button>
      </template>
    </Header>
    <div class="p-4 lg:px-10 lg:py-5">
      <p v-if="bookingsStore.isLoading" class="font-medium">
        Loading bookings...
      </p>
      <p v-else-if="!hasBookings" class="font-medium">No bookings to show.</p>
      <BookingsTable v-else :bookings="filteredBookings" />
    </div>
  </section>
</template>

<script setup lang="ts">
import BookingsTable from '~/components/bookings/table/BookingsTable.vue'
import Header from '~/components/shared/Header.vue'
import { useFilteredBookings } from '~/composables/bookings/useFilteredBookings'
import { useBookingsStore } from '~/pinia/bookings'
import { useTravelsStore } from '~/pinia/travels'

defineComponent({ name: 'Bookings' })

useHead({ title: 'Bookings - YouRoad Travels Manager' })

const bookingsStore = useBookingsStore()
const travelsStore = useTravelsStore()

const search = ref<string>('')

const filteredBookings = useFilteredBookings(search)

const entity = 'booking'

const hasBookings = computed(() => !!bookingsStore.bookings.length)

onMounted(() => {
  bookingsStore.fetchBookings()
  travelsStore.fetchTravels()
})
</script>
