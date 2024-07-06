<template>
  <HomeWidget :="widget">
    <p v-if="bookingsStore.isLoading">Loading bookings...</p>
    <p v-else-if="!bookingsStore.bookings.length">No bookings to show.</p>
    <QuickList :items />
  </HomeWidget>
</template>

<script setup lang="ts">
import HomeWidget from '~/components/home/HomeWidget.vue'
import { useBookingsStore } from '~/pinia/bookings'
import { formatBooking } from '~/utils/bookings'
import QuickList from '~/components/shared/QuickList.vue'
import { useShowBooking } from '~/composables/bookings/useShowBooking'

defineComponent({ name: 'HomeBookingsWidget' })

const bookingsStore = useBookingsStore()
const { showBooking } = useShowBooking()

onMounted(() => {
  bookingsStore.fetchBookings()
})

const items = computed(() =>
  bookingsStore.bookings
    .slice(0, 6)
    .map(formatBooking)
    .map(booking => ({
      primaryText: `${booking.customer_first_name} ${booking.customer_last_name}`,
      secondaryText: booking.travel.name,
      action: () => showBooking(booking.id)
    }))
)

const widget = {
  title: 'Bookings',
  description: 'Create, edit and delete bookings, and link them to travels.',
  url: '/bookings'
}
</script>
