<template>
  <div>
    <ListHeader
      :entity
      :showSearch="!!bookingsStore.bookings.length"
      :query="search"
      @update:query="search = $event"
      @update:open-modal="modalOpen = 'form'"
    />
    <div class="mt-6">
      <p v-if="bookingsStore.isLoading" class="font-medium">
        Loading bookings...
      </p>
      <p v-else-if="!bookingsStore.bookings.length" class="font-medium">
        No bookings to show.
      </p>
      <BookingsTable
        v-else
        :bookings="filteredBookings"
        @update:selected-booking="updateSelectedBooking"
      />
    </div>
    <BookingFormModal
      :open="modalOpen === 'form'"
      @update:open="updateModalOpen"
      :booking="selectedBooking"
    />
    <BookingShowModal
      v-if="selectedBooking"
      :open="modalOpen === 'show'"
      @update:open="updateModalOpen"
      :booking="selectedBooking"
    />
  </div>
</template>

<script setup lang="ts">
import BookingFormModal from '~/components/bookings/modals/BookingFormModal.vue'
import BookingShowModal from '~/components/bookings/modals/show/BookingShowModal.vue'
import BookingsTable from '~/components/bookings/table/BookingsTable.vue'
import ListHeader from '~/components/shared/ListHeader.vue'
import { useFilteredBookings } from '~/composables/bookings/useFilteredBookings'
import { useBookingsStore } from '~/pinia/bookings'
import { useTravelsStore } from '~/pinia/travels'
import type { Booking } from '~/types/bookings'

type ModalType = 'show' | 'form'

export type SelectedBookingPayload = {
  booking?: Booking
  action: ModalType
}

defineComponent({ name: 'Bookings' })

useHead({ title: 'Bookings - YouRoad Travels Manager' })

const bookingsStore = useBookingsStore()
const travelsStore = useTravelsStore()

const modalOpen = ref<ModalType | boolean>(false)
const selectedBooking = ref<Booking | undefined>(undefined)
const search = ref<string>('')

const filteredBookings = useFilteredBookings(search)

const entity = 'bookings'

onMounted(() => {
  bookingsStore.fetchBookings()
  travelsStore.fetchTravels()
})

const updateSelectedBooking = (payload: SelectedBookingPayload) => {
  selectedBooking.value = payload.booking
  modalOpen.value = payload.action
}

const updateModalOpen = (value: boolean) => {
  selectedBooking.value = undefined
  modalOpen.value = value
}
</script>
