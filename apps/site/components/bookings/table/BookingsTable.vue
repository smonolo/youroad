<template>
  <Table :headers>
    <BookingsTableRow
      v-for="(booking, key) in bookings"
      :key
      :booking
      @update:open-modal="$emit('update:openModal', $event)"
    />
  </Table>
</template>

<script setup lang="ts">
import type { Booking } from '~/types/bookings'
import BookingsTableRow from '~/components/bookings/table/BookingsTableRow.vue'
import Table from '~/components/ui/Table.vue'
import type { BookingModalType } from '~/pages/bookings.vue'

type Props = {
  bookings: Booking[]
}

type Emits = {
  'update:openModal': [modalType: BookingModalType]
}

defineComponent({ name: 'BookingsTable' })

defineProps<Props>()

defineEmits<Emits>()

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
