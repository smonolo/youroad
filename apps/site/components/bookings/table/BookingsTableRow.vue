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
      <div class="flex items-center gap-x-3">
        <button
          @click="$emit('update:selectedBooking', { booking, action: 'show' })"
        >
          <i class="bi bi-eye-fill text-neutral-800" />
        </button>
        <button
          @click="$emit('update:selectedBooking', { booking, action: 'form' })"
        >
          <i class="bi bi-pencil-fill text-blue-500" />
        </button>
        <button @click="deleteBooking(booking.id)">
          <i class="bi bi-trash-fill text-red-500" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
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

defineEmits<Emits>()

const { $api } = useNuxtApp()
const bookingsStore = useBookingsStore()

const formattedBooking = computed(() => formatBooking(props.booking))

const deleteBooking = (id: string) => {
  $api.deleteBooking(id)
  bookingsStore.removeBooking(id)
}
</script>
