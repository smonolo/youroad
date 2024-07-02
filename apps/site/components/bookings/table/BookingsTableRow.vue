<template>
  <tr>
    <td class="px-4 py-2">
      {{ formattedBooking.customer_first_name }}
      {{ formattedBooking.customer_last_name }}
    </td>
    <td class="px-4 py-2">{{ formattedBooking.customer_email }}</td>
    <td class="px-4 py-2">{{ formattedBooking.customer_phone }}</td>
    <td class="px-4 py-2">
      {{ formattedBooking.customer_age }} -
      {{ formattedBooking.customer_gender }}
    </td>
    <td class="px-4 py-2">{{ formattedBooking.payment_method }}</td>
    <td class="px-4 py-2">{{ formattedBooking.travel.name }}</td>
    <td class="px-4 py-2">
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

const { $api } = useNuxtApp()
const bookingsStore = useBookingsStore()

const formattedBooking = computed(() => formatBooking(props.booking))

const actions = {
  show: () =>
    emit('update:selectedBooking', { booking: props.booking, action: 'show' }),
  edit: () =>
    emit('update:selectedBooking', { booking: props.booking, action: 'form' }),
  remove: () => deleteBooking(props.booking.id)
}

const deleteBooking = (id: string) => {
  $api.deleteBooking(id)
  bookingsStore.removeBooking(id)
}
</script>
