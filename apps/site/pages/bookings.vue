<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Manage Bookings</h1>
      <input
        v-if="!!bookingsStore.bookings.length"
        v-model="search"
        class="input w-[400px]"
        placeholder="Search bookings..."
      />
      <button class="button" @click="modalOpen = 'form'">Create booking</button>
    </div>
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
  </div>
</template>

<script setup lang="ts">
import BookingFormModal from '~/components/bookings/modals/BookingFormModal.vue'
import BookingsTable from '~/components/bookings/table/BookingsTable.vue'
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

const filteredBookings = computed(() =>
  bookingsStore.bookings.filter(b =>
    b.customer_email.toLowerCase().includes(search.value.toLowerCase())
  )
)

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
