<template>
  <Table :headers>
    <BookingsTableRow v-for="(booking, key) in bookings" :key :booking />
  </Table>
</template>

<script setup lang="ts">
import type { Booking } from '~/types/bookings'
import BookingsTableRow from '~/components/bookings/table/BookingsTableRow.vue'
import Table from '~/components/ui/Table.vue'

type Props = {
  bookings: Booking[]
}

defineComponent({ name: 'BookingsTable' })

defineProps<Props>()

const headers = [
  'Full Name',
  'Email',
  'Phone',
  'Age',
  'Gender',
  'Payment Method',
  'Travel'
]
</script>
