<template>
  <div>
    <h1 class="text-2xl font-semibold">Manage Bookings</h1>
  </div>
</template>

<script setup lang="ts">
import { useBookingsStore } from '~/pinia/bookings'

defineComponent({ name: 'Bookings' })

useHead({ title: 'Bookings - YouRoad Travels Manager' })

const bookingsStore = useBookingsStore()

onMounted(() => {
  bookingsStore.fetchBookings()
})
</script>
