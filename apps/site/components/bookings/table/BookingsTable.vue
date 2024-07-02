<template>
  <Table :headers>
    <BookingsTableRow
      v-for="(booking, key) in bookings"
      :key
      :booking
      @update:selected-booking="$emit('update:selectedBooking', $event)"
    />
  </Table>
</template>

<script setup lang="ts">
import type { SelectedTravelPayload } from '~/pages/travels.vue'
import type { Booking } from '~/types/bookings'
import BookingsTableRow from '~/components/bookings/table/BookingsTableRow.vue'
import Table from '~/components/ui/Table.vue'

type Props = {
  bookings: Booking[]
}

type Emits = {
  'update:selectedBooking': [payload: SelectedTravelPayload]
}

defineComponent({ name: 'BookingsTable' })

defineProps<Props>()

defineEmits<Emits>()

const headers = [
  'Full Name',
  'Email',
  'Phone',
  'Age and gender',
  'Payment method',
  'Travel'
]
</script>
