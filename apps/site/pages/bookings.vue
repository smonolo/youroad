<template>
  <section>
    <ListHeader
      v-model:search="search"
      :entity
      :show-filters="hasBookings"
      @update:open-modal="openModal('form')"
    />
    <div class="p-4 lg:px-10 lg:py-5">
      <p v-if="bookingsStore.isLoading" class="font-medium">
        Loading bookings...
      </p>
      <p v-else-if="!hasBookings" class="font-medium">No bookings to show.</p>
      <BookingsTable
        v-else
        :bookings="filteredBookings"
        @update:open-modal="modal = $event"
      />
    </div>
    <BookingFormModal :open="modal === 'form'" @update:open="modal = $event" />
    <BookingShowModal :open="modal === 'show'" @update:open="modal = $event" />
  </section>
</template>

<script setup lang="ts">
import BookingFormModal from '~/components/bookings/modals/BookingFormModal.vue'
import BookingShowModal from '~/components/bookings/modals/show/BookingShowModal.vue'
import BookingsTable from '~/components/bookings/table/BookingsTable.vue'
import ListHeader from '~/components/shared/ListHeader.vue'
import { useFilteredBookings } from '~/composables/bookings/useFilteredBookings'
import { useBookingsStore } from '~/pinia/bookings'
import { useTravelsStore } from '~/pinia/travels'

export type BookingModalType = 'show' | 'form'

defineComponent({ name: 'Bookings' })

useHead({ title: 'Bookings - YouRoad Travels Manager' })

const bookingsStore = useBookingsStore()
const travelsStore = useTravelsStore()

const modal = ref<BookingModalType | boolean>(false)
const search = ref<string>('')

const filteredBookings = useFilteredBookings(search)

const entity = 'bookings'

const hasBookings = computed(() => !!bookingsStore.bookings.length)

onMounted(() => {
  bookingsStore.fetchBookings()
  travelsStore.fetchTravels()
})

const openModal = (modalType: BookingModalType, bookingId?: string) => {
  bookingsStore.selectBooking(bookingId ?? undefined)

  modal.value = modalType
}
</script>
