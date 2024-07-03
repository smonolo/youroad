<template>
  <tr>
    <td v-for="(cell, key) in cells" :key>{{ cell }}</td>
    <td>
      <TableActions :="actions" />
    </td>
  </tr>
</template>

<script setup lang="ts">
import TableActions from '~/components/shared/tables/TableActions.vue'
import type { SelectedBookingPayload } from '~/pages/bookings.vue'
import { useBookingsStore } from '~/pinia/bookings'
import type { Booking } from '~/types/bookings'
import { formatBooking } from '~/utils/bookings'

type Props = {
  booking: Booking
}

type Emits = {
  'update:selectedBooking': [payload: SelectedBookingPayload]
}

defineComponent({ name: 'BookingsTableRow' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const bookingsStore = useBookingsStore()

const formatted = computed(() => formatBooking(props.booking))

const actions = {
  show: () =>
    emit('update:selectedBooking', { booking: props.booking, action: 'show' }),
  edit: () =>
    emit('update:selectedBooking', { booking: props.booking, action: 'form' }),
  remove: () => bookingsStore.deleteBooking(props.booking.id)
}

const cells = [
  `${formatted.value.customer_first_name} ${formatted.value.customer_last_name}`,
  formatted.value.customer_email,
  formatted.value.customer_phone,
  formatted.value.customer_age,
  formatted.value.customer_gender,
  formatted.value.payment_method,
  formatted.value.travel.name
]
</script>
