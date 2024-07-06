<template>
  <HomeWidget :="widget">
    <p v-if="bookingsStore.isLoading">Loading bookings...</p>
    <p v-else-if="!bookingsStore.bookings.length">No bookings to show.</p>
    <ul v-else class="[&>li:first-child]:rounded-t-lg">
      <li
        v-for="(booking, key) in bookingsStore.bookings
          .slice(0, 6)
          .map(formatBooking)"
        :key
        class="flex cursor-pointer flex-col justify-between border-b border-neutral-200 px-2 py-2 transition-colors hover:bg-neutral-100 md:flex-row md:items-center"
        @click="showBooking(booking.id)"
      >
        <span class="block font-medium">
          {{ booking.customer_first_name }}
          {{ booking.customer_last_name }}
        </span>
        <span class="block">
          {{ booking.travel.name }}
        </span>
      </li>
    </ul>
  </HomeWidget>
</template>

<script setup lang="ts">
import HomeWidget from '~/components/home/HomeWidget.vue'
import { useBookingsStore } from '~/pinia/bookings'
import { useUiStore } from '~/pinia/ui'
import { formatBooking } from '~/utils/bookings'

defineComponent({ name: 'HomeBookingsWidget' })

const bookingsStore = useBookingsStore()
const uiStore = useUiStore()

onMounted(() => {
  bookingsStore.fetchBookings()
})

const widget = {
  title: 'Bookings',
  description: 'Create, edit and delete bookings, and link them to travels.',
  url: '/bookings'
}

const showBooking = (id: string) => {
  bookingsStore.selectBooking(id)
  uiStore.openModal('booking-show')
}
</script>
